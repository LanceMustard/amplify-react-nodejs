import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerItemTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Tags?: (ItemTagTag | null)[] | null;
  readonly ItemProfiles?: (ItemTagItemProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Tags: AsyncCollection<ItemTagTag>;
  readonly ItemProfiles: AsyncCollection<ItemTagItemProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemTag = LazyLoading extends LazyLoadingDisabled ? EagerItemTag : LazyItemTag

export declare const ItemTag: (new (init: ModelInit<ItemTag>) => ItemTag) & {
  copyOf(source: ItemTag, mutator: (draft: MutableModel<ItemTag>) => MutableModel<ItemTag> | void): ItemTag;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly groupID: string;
  readonly itemtags?: (ItemTagTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly groupID: string;
  readonly itemtags: AsyncCollection<ItemTagTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerItemProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly itemtags?: (ItemTagItemProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly itemtags: AsyncCollection<ItemTagItemProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemProfile = LazyLoading extends LazyLoadingDisabled ? EagerItemProfile : LazyItemProfile

export declare const ItemProfile: (new (init: ModelInit<ItemProfile>) => ItemProfile) & {
  copyOf(source: ItemProfile, mutator: (draft: MutableModel<ItemProfile>) => MutableModel<ItemProfile> | void): ItemProfile;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Tags?: (Tag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Tags: AsyncCollection<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerItemTagTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTagTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemTagId?: string | null;
  readonly tagId?: string | null;
  readonly itemTag: ItemTag;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemTagTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTagTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemTagId?: string | null;
  readonly tagId?: string | null;
  readonly itemTag: AsyncItem<ItemTag>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemTagTag = LazyLoading extends LazyLoadingDisabled ? EagerItemTagTag : LazyItemTagTag

export declare const ItemTagTag: (new (init: ModelInit<ItemTagTag>) => ItemTagTag) & {
  copyOf(source: ItemTagTag, mutator: (draft: MutableModel<ItemTagTag>) => MutableModel<ItemTagTag> | void): ItemTagTag;
}

type EagerItemTagItemProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTagItemProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemTagId?: string | null;
  readonly itemProfileId?: string | null;
  readonly itemTag: ItemTag;
  readonly itemProfile: ItemProfile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemTagItemProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemTagItemProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemTagId?: string | null;
  readonly itemProfileId?: string | null;
  readonly itemTag: AsyncItem<ItemTag>;
  readonly itemProfile: AsyncItem<ItemProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemTagItemProfile = LazyLoading extends LazyLoadingDisabled ? EagerItemTagItemProfile : LazyItemTagItemProfile

export declare const ItemTagItemProfile: (new (init: ModelInit<ItemTagItemProfile>) => ItemTagItemProfile) & {
  copyOf(source: ItemTagItemProfile, mutator: (draft: MutableModel<ItemTagItemProfile>) => MutableModel<ItemTagItemProfile> | void): ItemTagItemProfile;
}