import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
 export default Component.extend({
    
    j:0,
    store:service('store'),
    router: service(),
    @action
   
login(){
    var Alart=false;
    this.store.findAll('registeruserdetails').then ((userdetail) => {
    for (var i=0 ;i<userdetail.content.length; i++) {     
      var name = userdetail.content[i].__recordData.__data
        var id=0;
        if(name.name == this.value && name.password==this.value1){
          
            this.store.findAll('userdetails').then ((detail) => {
                if(detail.content.length!=0){
                   
                 for(var i=0;i<detail.content.length;i++){
                   if(id<parseInt(detail.content[i].__recordData.__data.noId) || i==0){
                     id= parseInt(detail.content[i].__recordData.__data.noId) 
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

       /*     console.log("A")
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
            
            break;*/
         
        } 
      
    }     
    
    
});

}

});
