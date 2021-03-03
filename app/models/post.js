import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';
// const {Model} = DS;

export default Model.extend ({
 
  postSubject:DS.attr('string'),
  userName:DS.attr('string'),
  postTittle:DS.attr('string'),
  postId:DS.attr('string'),
  postStory:DS.attr('string'),

});
