import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string'),
  dt_completed: DS.attr('date'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  dt_started: DS.attr('date'),
  external_id: DS.attr('guid'),
  price: DS.attr('decimal'),
  customer_id: DS.belongsTo('data-line-lohf-customer', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-lohf-order-state', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-lohf-order-state', { inverse: null, async: false }),
  modifier_id: DS.belongsTo('data-line-lohf-usr', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-lohf-usr', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-lohf-contragent', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-lohf-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_completed: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.dt_completed.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_started: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.dt_started.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  external_id: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-lohf-service-order.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_orderE', 'data-line-lohf-service-order', {
    description: attr('Description', { index: 0 }),
    dt_completed: attr('Dt_completed', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    dt_started: attr('Dt_started', { index: 4 }),
    external_id: attr('External_id', { index: 5 }),
    price: attr('Price', { index: 6 }),
    state: belongsTo('data-line-lohf-order-state', 'State', {
      description: attr('Description', { index: 8 })
    }, { index: 7 }),
    modifier_id: belongsTo('data-line-lohf-usr', 'Modifier_id', {
      login: attr('Login', { index: 10 })
    }, { index: 9 }),
    customer_id: belongsTo('data-line-lohf-customer', 'Customer_id', {
      customer: attr('Customer', { index: 12 })
    }, { index: 11 }),
    contragent_id: belongsTo('data-line-lohf-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 18 })
    }, { index: 17 }),
    creator_id: belongsTo('data-line-lohf-usr', 'Creator_id', {
      login: attr('Login', { index: 20 })
    }, { index: 19 })
  });

  modelClass.defineProjection('service_orderL', 'data-line-lohf-service-order', {
    description: attr('Description', { index: 0 }),
    dt_completed: attr('Dt_completed', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    dt_started: attr('Dt_started', { index: 4 }),
    external_id: attr('External_id', { index: 5 }),
    price: attr('Price', { index: 6 }),
    state: belongsTo('data-line-lohf-order-state', 'Description', {
      description: attr('Description', { index: 7 })
    }, { index: -1, hidden: true }),
    modifier_id: belongsTo('data-line-lohf-usr', 'Login', {
      login: attr('Login', { index: 8 })
    }, { index: -1, hidden: true }),
    customer_id: belongsTo('data-line-lohf-customer', 'Customer', {
      customer: attr('Customer', { index: 9 })
    }, { index: -1, hidden: true }),
    contragent_id: belongsTo('data-line-lohf-contragent', 'Contragent', {
      contragent: attr('Contragent', { index: 12 })
    }, { index: -1, hidden: true }),
    creator_id: belongsTo('data-line-lohf-usr', 'Login', {
      login: attr('Login', { index: 13 })
    }, { index: -1, hidden: true })
  });
};
