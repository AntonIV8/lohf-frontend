import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_started: DS.attr('date'),
  dt_ended: DS.attr('date'),
  customer_id: DS.belongsTo('data-line-lohf-customer', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-lohf-service', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-lohf-service', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-lohf-contragent', { inverse: null, async: false }),
  service_spec_id: DS.belongsTo('data-line-lohf-service-spec', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-lohf-service-state', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-lohf-service', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-lohf-contragent', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-lohf-service-state', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-lohf-service.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-lohf-service.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-lohf-service.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_started: {
    descriptionKey: 'models.data-line-lohf-service.validations.dt_started.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_ended: {
    descriptionKey: 'models.data-line-lohf-service.validations.dt_ended.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-lohf-service.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-lohf-service.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-lohf-service.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-lohf-service.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-lohf-service.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-lohf-service.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('serviceE', 'data-line-lohf-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_started: attr('Dt_started', { index: 3 }),
    dt_ended: attr('Dt_ended', { index: 4 }),
    contragent_id: belongsTo('data-line-lohf-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 6 })
    }, { index: 5 }),
    cfs_id: belongsTo('data-line-lohf-service', 'Cfs_id', {
      name: attr('Name', { index: 8 })
    }, { index: 7 }),
    service_spec_id: belongsTo('data-line-lohf-service-spec', 'Service_spec_id', {
      enum: attr('Enum', { index: 10 })
    }, { index: 9 }),
    state: belongsTo('data-line-lohf-service-state', 'State', {
      description: attr('Description', { index: 12 })
    }, { index: 11 }),
    parent_id: belongsTo('data-line-lohf-service', 'Parent_id', {
      name: attr('Name', { index: 14 })
    }, { index: 13 }),
    customer_id: belongsTo('data-line-lohf-customer', 'Customer_id', {
      customer: attr('Customer', { index: 18 })
    }, { index: 17 })
  });

  modelClass.defineProjection('serviceL', 'data-line-lohf-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_started: attr('Dt_started', { index: 3 }),
    dt_ended: attr('Dt_ended', { index: 4 }),
    contragent_id: belongsTo('data-line-lohf-contragent', 'Contragent', {

    }, { index: 5, hidden: true }),
    cfs_id: belongsTo('data-line-lohf-service', 'Name', {

    }, { index: 6, hidden: true }),
    service_spec_id: belongsTo('data-line-lohf-service-spec', 'Enum', {

    }, { index: 7, hidden: true }),
    state: belongsTo('data-line-lohf-service-state', 'Description', {

    }, { index: 8, hidden: true }),
    parent_id: belongsTo('data-line-lohf-service', 'Name', {

    }, { index: 9, hidden: true }),
    customer_id: belongsTo('data-line-lohf-customer', 'Customer', {

    }, { index: 11, hidden: true })
  });
};
