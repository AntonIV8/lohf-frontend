import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  group_id: DS.belongsTo('data-line-lohf-grp', { inverse: null, async: false }),
  group_id: DS.belongsTo('data-line-lohf-grp', { inverse: null, async: false }),
  user_id: DS.belongsTo('data-line-lohf-usr', { inverse: null, async: false })
});

export let ValidationRules = {
  group_id: {
    descriptionKey: 'models.data-line-lohf-user-group.validations.group_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-lohf-user-group.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_groupE', 'data-line-lohf-user-group', {
    user_id: belongsTo('data-line-lohf-usr', 'User_id', {
      login: attr('Login', { index: 1 })
    }, { index: 0 }),
    group_id: belongsTo('data-line-lohf-grp', 'Group_id', {
      name: attr('Name', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('user_groupL', 'data-line-lohf-user-group', {
    user_id: belongsTo('data-line-lohf-usr', 'Login', {
      login: attr('Login', { index: 0 })
    }, { index: -1, hidden: true }),
    group_id: belongsTo('data-line-lohf-grp', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
