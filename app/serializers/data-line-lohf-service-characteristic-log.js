import { Serializer as service_characteristic_logSerializer } from
  '../mixins/regenerated/serializers/data-line-lohf-service-characteristic-log';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_characteristic_logSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
