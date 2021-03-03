import Component from '@ember/component';
import marked from "marked/lib/marked.esm.js";
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
  store:service('store'),
  CurrentUserName:null,
  photosrc:null,
  valuepass:false,
  valuepass1:true,
  valuepass2:false,
  valuepass3:false,
  valuepass4:false,
  id:null,
  postvalue1:"",
  postvalue2:"",
  postvalue3:"",
  parentid:null,
  posts:[],
    init() {
      var id=0
        this._super(...arguments);
       
        this.store.findAll('userdetails').then ((userdetail) => {
         for(var j=0;j<userdetail.content.length;j++){
              if(id<parseInt(userdetail.content[j].__recordData.__data.noId) || j==0){
                id=parseInt(userdetail.content[j].__recordData.__data.noId)
                this.CurrentUserName=userdetail.content[j].__recordData.__data.name
                console.log(this.CurrentUserName+" :curent usernamr" +id+","+j)
              }
            }     
         this.set("valuepass4",true)       
      });
        this. CurrentUserName =name.name  
        this.photosrc=name.photosrc
        this.store.findAll('post').then ((userPost) => {
            var array1=[];
            var content=userPost.content;
            if(userPost.content!=null){
                  userPost.content.map((obj, index) => {
                    array1.push({
                      postTittle:obj.__recordData.__data.postTittle,
                      postSubject:obj.__recordData.__data.postSubject,
                      userName:obj.__recordData.__data.userName,
                      postId:obj.__recordData.__data.postId,
                      postStory:marked(obj.__recordData.__data.postStory),
                      id:obj.id

                    })
                  })
                  this.posts=array1;
                  console.log(this.posts);
                  this.set("valuepass3",true)
            }
        })     
    },
    router: service(),
      @action
      edit(editPostValue){
        console.log(editPostValue)
        this.store.findRecord("post",editPostValue.id).then(()=>{
        
          var editvalue1 =editPostValue.postTittle;
          var editvalue2 = editPostValue.postSubject;
          var editvalue3 =editPostValue.postStory;
          console.log(editvalue1)
          console.log(editvalue2)
          console.log(editvalue3)
          this.set("postvalue1",editvalue1)
          this.set("postvalue2",editvalue2)
          this.set("postvalue3",editvalue3)
          this. set("id", editPostValue.id)

          this.set("valuepass4",false)
          this.set("valuepass",true)
         });
       /* var parentid=event.target.id;
        console.log(parentid)
        this.store.findAll('post').then ((userPost) => {
          for(var j=0;j<userPost.content.length;j++){
            var objId=userPost.content[j].__recordData.__data.postId;
            console.log("obj"+objId)
              if(objId == parentid || this.CurrentUserName=="Admin"){
                console.log(this.CurrentUserName)
                var editvalue1 = userPost.content[j].__recordData.__data.postTittle;
                var editvalue2 = userPost.content[j].__recordData.__data.postSubject;
                var editvalue3 = userPost.content[j].__recordData.__data.postStory;
                console.log(editvalue1)
                console.log(editvalue2)
                console.log(editvalue3)
                this.set("postvalue1",editvalue1)
                this.set("postvalue2",editvalue2)
                this.set("postvalue3",editvalue3)
                this. set("id", objId)
                 break;
                 
              }
          
            this.set("valuepass4",false)
            this.set("valuepass",true)
          }
      }); */
   
      /*  var CurrentUserName ;
          var userdetail=JSON.parse(localStorage.getItem("userdetails"));
          const keys = Object.keys(userdetail)
          for (const key of keys) {
             var  name= userdetail[key]
             break;
          }
          CurrentUserName =name.name
        
        var parentid=event.target.id;         
        var userPost=JSON.parse(localStorage.getItem("userPost"));
        for (var i = 0; i < userPost.length; i++){
            var obj = userPost[i];
            var objId = obj.id; 
            if((objId == parentid && this.CurrentUserName==obj.userName)||(objId == parentid && this.CurrentUserName=="Admin")){  
              var editvalue1 = obj.postTittle;
              var editvalue2 = obj.postSubject;
              var editvalue3 = obj.postStory;
              // console.log(editvalue)  
              console.log(objId)
              this.set("postvalue1",editvalue1)
              this.set("postvalue2",editvalue2)
              this.set("postvalue3",editvalue3)
              this. set("id", objId)
              this.set("valuepass",true)
              this.set("valuepass1",false)
              //  location.reload()
              //  this.get('router').transitionTo('editpage')
            }
        }*/
      },
      router: service(),
      store:service('store'),
      @action
      deletepost(deletepost){
       
       this.store.peekRecord("post",deletepost.id).destroyRecord().then(()=>{
        location.reload()
       })        
     /* var CurrentUserName
        var userdetail=JSON.parse(localStorage.getItem("userdetails"));
        const keys = Object.keys(userdetail)
        for (const key of keys) {
           var  name= userdetail[key]
           break;
        }
        CurrentUserName =name.name
      
      var id= event.target.id;
      var userPost=JSON.parse(localStorage.getItem("userPost"));   
      for (var i = 0; i < userPost.length; i++){
          var obj = userPost[i];
          var objId = obj.id;
          // console.log(CurrentUserName)
          if((objId == id && CurrentUserName==obj.userName)||(objId == id && CurrentUserName=="Admin") ){
              userPost.splice(i, 1);
              localStorage.removeItem(id);
              localStorage.setItem('userPost', JSON.stringify(userPost));
              this.init();
              break;  
          }
      }*/
      // 
     },

     @action
     comment() {
          console.log(event.target.id+"idd");
          console.log(this.CurrentUserName);
          this.set("parentid",event.target.id);
          this.set("valuepass2",true)
          this.set("valuepass4",false)
     }
      
})

