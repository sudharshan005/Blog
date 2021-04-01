import Component from '@glimmer/component';  
import { action } from '@ember/object'
import marked from "marked/lib/marked.esm.js";
import{ inject as service } from '@ember/service';
export default class NewPostComponent extends Component {
    i=1;
    potosrc=null;
   CurrentUserName="";
    @service store;
    @service router;
    @action
    valuepass(){
      var id;
      var photo;
        this.store.findAll('userdetails').then ((userdetail) => {
            for(var j=0;j<userdetail.content.length;j++){
              if(id<parseInt(userdetail.content[j].__recordData.__data.noId) || j==0){
                id=parseInt(userdetail.content[j].__recordData.__data.noId)
              this. CurrentUserName=userdetail.content[j].__recordData.__data.name
                console.log(this.CurrentUserName)
              }
            } 
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

          });   

            this.store.findAll('registeruserdetails').then((registerdetail)=>{
              for(var j=0;j<registerdetail.content.length;j++){
                if(registerdetail.content[j].__recordData.__data.name == this.CurrentUserName){
                    console.log(this.CurrentUserName+" , "+registerdetail.content[j].__recordData.__data.name)
                      photo=registerdetail.content[j].__recordData.__data.photourl;
                      break;
                }
                else if(this.CurrentUserName=="Admin"){
                   photo="assets/image/admin.jpg"
                  break;
                }
      
                else if(this.CurrentUserName=="Guest"){
                   photo="assets/image/guest.png"
                  break;
                }
              }
            }).then(()=>{

              var postDetails=this.store.createRecord('post',{
                postTittle:this.value1,
                postSubject:this.value2,
                postStory:this.value3,
                userName:this.CurrentUserName,
                postId:this.i,
                postimg:this.photosrc,
                profile:photo
              });
              postDetails.save().then(() => {  
                this.router.transitionTo("homepage")

              })
            })
    


       
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

    @action
    image(){ 
    this.photosrc
    var reader=new FileReader();
    reader .readAsDataURL(event.target.files[0])

   reader.addEventListener("load" ,()=>{
     localStorage.setItem("postimgData", reader.result);
     this.photosrc=reader.result;
   })
  }
}
