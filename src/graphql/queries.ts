/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTODO = /* GraphQL */ `
  query GetTODO($id: ID!) {
    getTODO(id: $id) {
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
export const listTODOS = /* GraphQL */ `
  query ListTODOS(
    $filter: ModelTODOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTODOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTODOS = /* GraphQL */ `
  query SyncTODOS(
    $filter: ModelTODOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTODOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
