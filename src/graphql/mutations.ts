/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTODO = /* GraphQL */ `
  mutation CreateTODO(
    $input: CreateTODOInput!
    $condition: ModelTODOConditionInput
  ) {
    createTODO(input: $input, condition: $condition) {
      id
      name
      description
      completed
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTODO = /* GraphQL */ `
  mutation UpdateTODO(
    $input: UpdateTODOInput!
    $condition: ModelTODOConditionInput
  ) {
    updateTODO(input: $input, condition: $condition) {
      id
      name
      description
      completed
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTODO = /* GraphQL */ `
  mutation DeleteTODO(
    $input: DeleteTODOInput!
    $condition: ModelTODOConditionInput
  ) {
    deleteTODO(input: $input, condition: $condition) {
      id
      name
      description
      completed
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
