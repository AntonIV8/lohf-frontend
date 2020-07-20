import { Serializer as roleSerializer } from
  '../mixins/regenerated/serializers/data-line-lohf-role';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(roleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
