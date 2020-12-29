import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
    array:[],
    init(){
        var array=[];
        this._super(...arguments);
        var userdetail=JSON.parse(localStorage.getItem("registeruserdetails"));
        this.set("array",userdetail)
    }

})
