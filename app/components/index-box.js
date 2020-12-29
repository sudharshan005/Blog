import Component from '@ember/component';
 import { action } from '@ember/object'
export default Component.extend({
    @action
    profileName(){
        var array=[]
      console.log(event.target.id)
       var CurrentUserName=event.target.id;
       

    var  details={
        name:CurrentUserName,
    }
    array.push(details)
    var exArray = JSON.parse(localStorage.getItem('userdetails'));
    var newArray = array.concat(exArray);
    localStorage.setItem('userdetails',JSON.stringify(newArray));

    }

})
