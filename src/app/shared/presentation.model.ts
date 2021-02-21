export enum DataType {
  INTEGER = 'INTEGER',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  FLOAT = 'FLOAT',
  STRING = 'STRING',
  DATE = 'DATE',
}

export interface PresentationModel {
  version: number;
  classes: {
    Site: {
      name: string;
      isAbstract: boolean;
      isUserDefined: boolean;
      presentation: Presentation;
      attributes: SitesClassModel;
    };
  };
}

export interface SitesClassModel {
  name: AttributesModel;
  country: AttributesModel;
  averageSwell: AttributesModel;
  bestMonths: [AttributesModel];
  favorite: AttributesModel;
}

export interface AttributesModel {
  isUserDefined: boolean;
  name: string;
  dataType: string;
  minCardinality: number;
  maxCardinality: number;
  presentation: Presentation;
  constraints?: Constraints;
}

export interface Presentation {
  description?: string;
  group?: string;
  index?: number;
  label?: string;
  shortLabel?: string;
  isDropdown?: boolean;
  isTypeahead?: boolean;
  decimalPlaces?: number;
  isArray?: boolean;
}

export interface Constraints {
  maxLength?: number;
  minLength?: number;
  minValue?: number;
  maxValue?: number;
  maxDate?: string;
  minDate?: string;
}
