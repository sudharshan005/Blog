import Component from '@ember/component';
 import { action } from '@ember/object';
 import { inject as service } from '@ember/service';
export default Component.extend({
    store:service('store'),
    router: service(),
    j:0,
     CurrentUserName:null,
    @action
    profileName(){
      
     
       this.CurrentUserName=event.target.id;
        var id=0;
        this.store.findAll('userdetails').then ((detail) => {
         
          if(detail.content.length!=0){
             
           for(var i=0;i<detail.content.length;i++){
             
             if(id<=parseInt(detail.content[i].__recordData.__data.noId) || i==0){
               id= parseInt(detail.content[i].__recordData.__data.noId )
               this.j=id+1;
               id=this.j;
               console.log(this.j+",j")
             }
           }
          }
        }).then(()=>{ 
       var details=this.store.createRecord('userdetails',{
        name:this.CurrentUserName,
        noId:this.j   
       });
       details.save().then(() => { 
     
        this.router.transitionTo("homepage")

       });
      });

    }

})
