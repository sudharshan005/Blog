import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
    userdetail:[],
    store:service('store'),
    valuepass1:false,
    init(){
        this._super(...arguments);
       var array2=[];
        this.store.findAll('registeruserdetails').then ((userdetail) => {   
            userdetail.content.map((obj, index) => {
              array2.push({
                    name:obj.__recordData.__data.name,
                    password:obj.__recordData.__data.password,

                }) ;   
                
            });
            this.userdetail=array2;
            this.set("valuepass1", true)
        });
    }

})
