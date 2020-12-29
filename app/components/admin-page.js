import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
    router: service(),
    @action
    Admin(){
            if(this.value=="Admin"&& this.value1=="Admin"){
                var array=[]
                var  details={
                name:"Admin"    
              }   
               array.push(details);
               console.log(array)
               var exArray = JSON.parse(localStorage.getItem('userdetails'));
               var newArray = array.concat(exArray);
               localStorage.setItem('userdetails',JSON.stringify(newArray));
               this.get('router').transitionTo('homepage')
            }
            else{
            alert("wrong password");
            }
    }
})