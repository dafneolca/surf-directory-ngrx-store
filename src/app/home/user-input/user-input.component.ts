import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import dataModel from '../../../assets/data/model.json';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//NEW
import { Store } from '@ngrx/store';
import { Site } from '../../shared/site.model';
import { AttributesModel } from '../../shared/presentation.model';
import * as SiteActions from '../../store/sites.actions';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  newSite: boolean = false;

  id: number;
  index: number;

  headers: any = [];
  siteForm: FormGroup;

  //Icons
  faInfoCircle = faInfoCircle;

  //new
  attributes: AttributesModel[] = [];
  subscription: Subscription;
  formSubscription: Subscription;
  paramSubscription: Subscription;
  site: Site;

  bestMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  selectedMonths: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private toastr: ToastrService,
    private store: Store<{ sites: { sites: Site[] } }>
  ) {}

  ngOnInit(): void {
    this.siteForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      country: new FormControl(null),
      averageSwell: new FormControl(null),
      bestMonths: new FormControl(null),
      favorite: new FormControl(null),
      id: new FormControl(null),
    });

    this.formSubscription = this.siteForm.valueChanges.subscribe((data) => {
      this.site = data;
    });

    this.getAttributes();
    this.paramSubscription = this.route.params.subscribe((res) => {
      if (res.id == 'new') {
        this.newSite = true;
      }
    });
    if (!this.newSite) {
      this.getUserData();
    }
  }

  getAttributes() {
    this.attributes = Object.values(dataModel.classes['Site'].attributes);
    this.headers = this.attributes.map((attr) => {
      return attr.name;
    });
  }

  getUserData() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
    this.subscription = this.store.select('sites').subscribe(
      (res) => {
        res.sites.forEach((s, index) => {
          if (s.id == this.id) {
            this.siteForm.patchValue(s);
            this.index = index;
          }
        });
      },
      (err) => {
        console.log(err);
        // this.toastr.error('Site could not be loaded', 'Error');
      }
    );
  }

  getSite() {
    return this.siteForm.value;
  }

  submit() {
    const value = this.siteForm.value;
    if (this.newSite) {
      this.store.dispatch(new SiteActions.AddSite(value));
      // this.toastr.success('Site has been added', 'Success');
    } else {
      this.store.dispatch(
        new SiteActions.UpdateSite({ index: this.index, site: this.site })
      );
      // this.toastr.success('Site has been updated', 'Success');
    }
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
