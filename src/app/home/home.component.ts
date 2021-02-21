import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

//Model structure of data presentation
import dataModel from '../../assets/data/model.json';

// NEW
//Store
import { Store } from '@ngrx/store';

//Models
import { Site } from '../shared/site.model';
import {
  SitesClassModel,
  PresentationModel,
} from '../shared/presentation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modelData: PresentationModel = dataModel;
  sites: Observable<{ sites: Site[] }>;

  tableHeaders: Array<String> = [];
  faCheck = faCheck;

  constructor(
    private router: Router,
    private store: Store<{ sites: { sites: Site[] } }>
  ) {}

  ngOnInit(): void {
    this.sites = this.store.select('sites');
    this.getAttributes();
    this.sites.subscribe((res) => console.log(res));
  }

  getAttributes() {
    const attributesObj: SitesClassModel = this.modelData.classes['Site']
      .attributes;

    const headersArr = Object.keys(attributesObj);
    headersArr.forEach((el, i) => {
      let head = attributesObj[headersArr[i]];
      if (!this.tableHeaders.includes(head)) {
        this.tableHeaders = [...this.tableHeaders, head];
      }
    });

    console.log('headers: ', this.tableHeaders);
  }

  onClickDetail(site) {
    if (site) {
      this.router.navigate([site.id]);
    }
  }

  onNew() {
    this.router.navigate(['/new']);
  }
}
