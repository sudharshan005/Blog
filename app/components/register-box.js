import Component from '@glimmer/component';
import { action } from '@ember/object'
export default class RegisterBoxComponent extends Component {
   
    array=[];

    @action
     val(){
       var  details={
         name:this.value,
         password:this.value1,
         email:this.value2, 
         photosrc:this.valuephoto,     
       }   
        this.array.push(details)
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
        }
  
    }
    
}
