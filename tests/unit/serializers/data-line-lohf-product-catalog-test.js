import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-lohf-product-catalog', 'Unit | Serializer | data-line-lohf-product-catalog', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:data-line-lohf-product-catalog',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:data-line-lohf-cardinality-type',
    'model:data-line-lohf-catalog',
    'model:data-line-lohf-characteristic-type',
    'model:data-line-lohf-contragent',
    'model:data-line-lohf-customer-acl',
    'model:data-line-lohf-customer',
    'model:data-line-lohf-dba',
    'model:data-line-lohf-dictionary-value',
    'model:data-line-lohf-dictionary',
    'model:data-line-lohf-grp',
    'model:data-line-lohf-order-item',
    'model:data-line-lohf-order-state',
    'model:data-line-lohf-product-catalog',
    'model:data-line-lohf-resource-characteristic-log',
    'model:data-line-lohf-resource-characteristic',
    'model:data-line-lohf-resource-common',
    'model:data-line-lohf-resource-log',
    'model:data-line-lohf-resource-shared',
    'model:data-line-lohf-resource-spec-characteristic',
    'model:data-line-lohf-resource-spec',
    'model:data-line-lohf-resource-usage-spec',
    'model:data-line-lohf-resource',
    'model:data-line-lohf-role',
    'model:data-line-lohf-service-characteristic-log',
    'model:data-line-lohf-service-characteristic',
    'model:data-line-lohf-service-log',
    'model:data-line-lohf-service-order',
    'model:data-line-lohf-service-spec-acl',
    'model:data-line-lohf-service-spec-characteristic',
    'model:data-line-lohf-service-spec',
    'model:data-line-lohf-service-state',
    'model:data-line-lohf-service-usage-spec',
    'model:data-line-lohf-service',
    'model:data-line-lohf-user-group',
    'model:data-line-lohf-user-resource-spec',
    'model:data-line-lohf-user-role',
    'model:data-line-lohf-user-service-order',
    'model:data-line-lohf-user-service-spec',
    'model:data-line-lohf-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
