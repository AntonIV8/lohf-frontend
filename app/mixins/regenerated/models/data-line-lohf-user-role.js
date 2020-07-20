import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  role_id: DS.belongsTo('data-line-lohf-role', { inverse: null, async: false }),
  user_id: DS.belongsTo('data-line-lohf-usr', { inverse: null, async: false })
});

export let ValidationRules = {
  role_id: {
    descriptionKey: 'models.data-line-lohf-user-role.validations.role_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-lohf-user-role.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_roleE', 'data-line-lohf-user-role', {
    role_id: belongsTo('data-line-lohf-role', 'Role_id', {
      name: attr('Name', { index: 1 })
    }, { index: 0 }),
    user_id: belongsTo('data-line-lohf-usr', 'User_id', {
      login: attr('Login', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('user_roleL', 'data-line-lohf-user-role', {
    role_id: belongsTo('data-line-lohf-role', 'Name', {
      name: attr('Name', { index: 0 })
    }, { index: -1, hidden: true }),
    user_id: belongsTo('data-line-lohf-usr', 'Login', {
      login: attr('Login', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
