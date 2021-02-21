import { Site } from '../shared/site.model';
import { EventEmitter } from '@angular/core';

// import dataModel from '../../assets/data/model.json';
import * as data from '../../assets/data/sites.json';

export class SitesService {
  private sites: Site[] = (data as any).default;

  getSites() {
    return this.sites;
  }

  addSite(site: Site) {
    this.sites.push(site);
  }
}
