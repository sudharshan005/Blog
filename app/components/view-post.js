import Component from '@ember/component';
import { action } from '@ember/object';
export default Component.extend({
    homepage:false,
    viewpostpage:true,
@action
pagechange(){
    this.set("homepage",true);
    this.set("viewpostpage",false);
}
});
