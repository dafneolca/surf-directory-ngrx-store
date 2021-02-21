import { Action } from '@ngrx/store';
import { Site } from '../shared/site.model';

export const ADD_SITE = 'ADD_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';

export class AddSite implements Action {
  readonly type = ADD_SITE;

  constructor(public payload: Site) {}
}

export class UpdateSite implements Action {
  readonly type = UPDATE_SITE;

  constructor(public payload: { index: number; site: Site }) {}
}

export type SiteActions = AddSite | UpdateSite;
