import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
    router: service(),
    j:0,
    store:service('store'),
    @action
    Admin(){
            if(this.value=="Admin"&& this.value1=="Admin"){
                var id=0;
                this.store.findAll('userdetails').then ((userdetail) => {
                    if(userdetail.content.length!=0){
                     for(var i=0;i<userdetail.content.length;i++){
                       if(id<parseInt(userdetail.content[i].__recordData.__data.noId) || i==0){
                         id= parseInt(userdetail.content[i].__recordData.__data.noId) 
                         this.j=id+1
                        
                       }
                     }
                    }
               
                }).then(() =>{ 
                    var details=this.store.createRecord('userdetails',{
                        name:this.value,
                        password:this.value1,
                        noId:this.j
                       });
                       details.save().then(() => {  
                        this.router.transitionTo("homepage")
                       });
                })
    
              }   
             /*  array.push(details);
               console.log(array)
               var exArray = JSON.parse(localStorage.getItem('userdetails'));
               var newArray = array.concat(exArray);
               localStorage.setItem('userdetails',JSON.stringify(newArray));
               this.get('router').transitionTo('homepage')*/
            
            else{
            alert("wrong password");
            }
    }
})