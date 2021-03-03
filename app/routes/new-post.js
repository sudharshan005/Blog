import Route from '@ember/routing/route';

export default class NewPostRoute extends Route {
    model() {
        return this.store.findAll('post');
    }
    
}
