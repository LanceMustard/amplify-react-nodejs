// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ItemTag, Tag, ItemProfile, Group, ItemTagTag, ItemTagItemProfile } = initSchema(schema);

export {
  ItemTag,
  Tag,
  ItemProfile,
  Group,
  ItemTagTag,
  ItemTagItemProfile
};