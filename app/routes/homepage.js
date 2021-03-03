import Route from '@ember/routing/route';

export default class HomepageRoute extends Route {
   model() {
       return this.store.findAll('post');
   };


}
