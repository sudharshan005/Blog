import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';
export default Model.extend ({
  name:DS.attr('string'),
  noId:DS.attr('string'),
  comment:DS.attr('string'),
});
