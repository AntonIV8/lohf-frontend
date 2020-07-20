import { Serializer as resource_specSerializer } from
  '../mixins/regenerated/serializers/data-line-lohf-resource-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
