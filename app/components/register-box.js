import Component from '@glimmer/component';
import { action } from '@ember/object'
import{ inject as service } from '@ember/service';
export default class RegisterBoxComponent extends Component {
   
   
    @service store;
    @service router;
   
    @action
     val(){
       var j=0;
       var details=this.store.createRecord('registeruserdetails',{
        name:this.value,
        password:this.value1,
        email:this.value2, 
       });
       details.save() 
       var id=0;
       this.store.findAll('userdetails').then ((detail) => {
         
         if(detail.content.length!=0){
             
          for(var i=0;i<detail.content.length;i++){
            if(id<parseInt(detail.content[i].__recordData.__data.noId) || i==0){
              id=parseInt(detail.content[i].__recordData.__data.noId) 
              j=id+1
            }
          }
         }
       }).then(()=>{

       
       var userdetails=this.store.createRecord('userdetails',{
        name:this.value,
        noId:j,
        password:this.value1    
       });  
       userdetails.save().then(() => {  
        this.router.transitionTo("homepage")

       });
    });
    }

}
  

      /*  this.array.push(details)
        this. CurrentUserName=this.value;
        var exArray = JSON.parse(localStorage.getItem('registeruserdetails'));
        var exArray1= JSON.parse(localStorage.getItem('userdetails'));
        if(exArray==null){
          localStorage.setItem('registeruserdetails',JSON.stringify(this.array));
          localStorage.setItem('userdetails',JSON.stringify(this.array));
        }
        else if(exArray!=null)  {
        var newArray = this.array.concat(exArray);
        var newArray1 = this.array.concat(exArray1);
        localStorage.setItem('registeruserdetails',JSON.stringify(newArray));
        localStorage.setItem('userdetails',JSON.stringify(newArray1));
        }*/
  
    