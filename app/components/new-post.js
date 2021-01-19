import Component from '@glimmer/component';  
import { action } from '@ember/object'
import marked from "marked/lib/marked.esm.js";
export default class NewPostComponent extends Component {
    i=1;
    @action
   
    valuepass(){

        var userdetail=JSON.parse(localStorage.getItem("userdetails"));
        const keys = Object.keys(userdetail)
        for (const key of keys) {
            console.log(key+","+keys)
          var  name= userdetail[key]
          break;
        }
       var CurrentUserName =name.name
    
        var userPost=JSON.parse(localStorage.getItem("userPost"));  
          if(userPost!=null){
            const keys = Object.keys(userPost)
              for (const key of keys) {
                var i= userPost[key]
                this.i=i.id
                this.i++
                break;
              }
          }
       var array=[]
          var postDetails={
            postTittle:marked(this.value1),
            postSubject:marked(this.value2),
            postStory:marked(this.value3),
            userName:CurrentUserName,
            id:this.i,
          }
          console.log(marked(this.value3),typeof(marked(this.value3)))
          array.push(postDetails) 
          var exArray = JSON.parse(localStorage.getItem('userPost'));
          if(exArray==null){
            localStorage.setItem('userPost',JSON.stringify(array));
          }
          else if(exArray!=null)  {
            var newArray = array.concat(exArray);
            localStorage.setItem('userPost',JSON.stringify(newArray));
          }

         
    }
}
