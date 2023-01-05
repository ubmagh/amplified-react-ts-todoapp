/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTODOInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  completed?: boolean | null,
  date: string,
  _version?: number | null,
};

export type ModelTODOConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTODOConditionInput | null > | null,
  or?: Array< ModelTODOConditionInput | null > | null,
  not?: ModelTODOConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TODO = {
  __typename: "TODO",
  id: string,
  name: string,
  description?: string | null,
  completed?: boolean | null,
  date: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTODOInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  completed?: boolean | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteTODOInput = {
  id: string,
  _version?: number | null,
};

export type ModelTODOFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTODOFilterInput | null > | null,
  or?: Array< ModelTODOFilterInput | null > | null,
  not?: ModelTODOFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTODOConnection = {
  __typename: "ModelTODOConnection",
  items:  Array<TODO | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTODOFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTODOFilterInput | null > | null,
  or?: Array< ModelSubscriptionTODOFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateTODOMutationVariables = {
  input: CreateTODOInput,
  condition?: ModelTODOConditionInput | null,
};

export type CreateTODOMutation = {
  createTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTODOMutationVariables = {
  input: UpdateTODOInput,
  condition?: ModelTODOConditionInput | null,
};

export type UpdateTODOMutation = {
  updateTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTODOMutationVariables = {
  input: DeleteTODOInput,
  condition?: ModelTODOConditionInput | null,
};

export type DeleteTODOMutation = {
  deleteTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTODOQueryVariables = {
  id: string,
};

export type GetTODOQuery = {
  getTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTODOSQueryVariables = {
  filter?: ModelTODOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTODOSQuery = {
  listTODOS?:  {
    __typename: "ModelTODOConnection",
    items:  Array< {
      __typename: "TODO",
      id: string,
      name: string,
      description?: string | null,
      completed?: boolean | null,
      date: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTODOSQueryVariables = {
  filter?: ModelTODOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTODOSQuery = {
  syncTODOS?:  {
    __typename: "ModelTODOConnection",
    items:  Array< {
      __typename: "TODO",
      id: string,
      name: string,
      description?: string | null,
      completed?: boolean | null,
      date: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTODOSubscriptionVariables = {
  filter?: ModelSubscriptionTODOFilterInput | null,
};

export type OnCreateTODOSubscription = {
  onCreateTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTODOSubscriptionVariables = {
  filter?: ModelSubscriptionTODOFilterInput | null,
};

export type OnUpdateTODOSubscription = {
  onUpdateTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTODOSubscriptionVariables = {
  filter?: ModelSubscriptionTODOFilterInput | null,
};

export type OnDeleteTODOSubscription = {
  onDeleteTODO?:  {
    __typename: "TODO",
    id: string,
    name: string,
    description?: string | null,
    completed?: boolean | null,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
