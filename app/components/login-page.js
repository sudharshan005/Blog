import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
    router: service(),
    
@action
login(){
    var Alart=false;
    var userdetail=JSON.parse(localStorage.getItem("registeruserdetails"));
    console.log(userdetail)
    for (var i=0 ;i<userdetail.length; i++) {       
      var name = userdetail[i]
      console.log(userdetail[i])
        if(name.name == this.value && name.password==this.value1){
            console.log("A")
           var array=[]
            var  details={
                name:this.value,
                password:this.value1,
              }   
               array.push(details);
               console.log(array)
               var exArray = JSON.parse(localStorage.getItem('userdetails'));
               var newArray = array.concat(exArray);
               localStorage.setItem('userdetails',JSON.stringify(newArray));
            this.get('router').transitionTo('homepage')
            Alart=true;
            break;
         
        }     
    }
    if(Alart==false){
        alert("wrong username")
    }

}

})
