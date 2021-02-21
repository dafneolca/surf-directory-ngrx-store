import { Site } from '../shared/site.model';
import { EventEmitter } from '@angular/core';

import * as data from '../../assets/data/model.json';
// import * as data from '../../assets/data/sites.json';

export class PresentationModelService {
  private sites: Site[] = (data as any).default;
}
