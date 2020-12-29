import EmberRouter from '@ember/routing/router';
import config from 'bproject/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('register');
  this.route('homepage');
  this.route('newpost');
  this.route('editpage');
  this.route('loginpage');
  this.route('adminpage');
  this.route('userdetail')
})
