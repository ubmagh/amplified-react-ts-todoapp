// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TODO } = initSchema(schema);

export {
  TODO
};