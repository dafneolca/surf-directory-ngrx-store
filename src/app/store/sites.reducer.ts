import { Site } from '../shared/site.model';
import * as data from '../../assets/data/sites.json';
import { Action } from '@ngrx/store';

import * as SiteActions from './sites.actions';

const initialState: { sites: Site[] } = {
  sites: (data as any).default,
};

export function sitesReducer(
  state = initialState,
  action: SiteActions.SiteActions
) {
  switch (action.type) {
    case SiteActions.ADD_SITE:
      return {
        ...state,
        sites: [...state.sites, action.payload],
      };
    case SiteActions.UPDATE_SITE:
      const site = state.sites[action.payload.index];
      const updatedSite = {
        ...site,
        ...action.payload.site,
      };
      const updatedSites = [...state.sites];
      updatedSites[action.payload.index] = updatedSite;
      return {
        ...state,
        sites: updatedSites,
      };
    default:
      return state;
  }
}
