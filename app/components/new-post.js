import Component from '@glimmer/component';  
import { action } from '@ember/object'
import marked from "marked/lib/marked.esm.js";
import{ inject as service } from '@ember/service';
export default class NewPostComponent extends Component {
    i=1;
    @service store;
    @service router;
    @action
    valuepass(){
      var CurrentUserName;
      this.store.findAll('userdetails').then ((userdetail) => {
        CurrentUserName= userdetail.content[0].__recordData.__data.name
      });
       this.store.findAll('post').then ((userPost) => { 
        var id=0;
        if(userPost.content.length!=null){
          userPost.content.map((obj, index) => {
            for(var j=0;j<userPost.content.length;j++){
              if(id<userPost.content[j].__recordData.__data.postId || j==0){
              var id= userPost.content[j].__recordData.__data.postId
              console.log(id);
                this.i= parseInt(id)+1;
                console.log(this.i);
              }
          }
       
        })
      }

          var postDetails=this.store.createRecord('post',{
            postTittle:this.value1,
            postSubject:this.value2,
            postStory:this.value3,
            userName:CurrentUserName,
            postId:this.i
           });
        postDetails.save().then(() => {  
            this.router.transitionTo("homepage")

        })
      });

       
        /*  var postDetails=this.store.createRecord('post');
          var store = this.targetObject.store;
          var postDetails=this.store.createRecord('post',{
      //  var array=[]
       


        
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

          console.log(this.store.findAll('post.1h4gVyl48B71uCja5nqW'));
          var userPost= this.store.findAll('post'); */
    }
}
