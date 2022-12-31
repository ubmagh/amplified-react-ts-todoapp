import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTODO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TODO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly completed?: boolean | null;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTODO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TODO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly completed?: boolean | null;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TODO = LazyLoading extends LazyLoadingDisabled ? EagerTODO : LazyTODO

export declare const TODO: (new (init: ModelInit<TODO>) => TODO) & {
  copyOf(source: TODO, mutator: (draft: MutableModel<TODO>) => MutableModel<TODO> | void): TODO;
}