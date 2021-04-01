import Component from '@ember/component';
import marked from "marked/lib/marked.esm.js";
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
  store:service('store'),
  CurrentUserName:null,
  photosrc:null,
  editPage:false,
  valuepass1:true,
  commentPage:false,
  Allpost:false,
  homePage:false,
  viewPostpage:false,
  option:false,
  moreoptionCount:0,
  id:null,
  postvalue1:"",
  postvalue2:"",
  postvalue3:"",
  postimgvalue:"",
  parentid:null,
  postOwner:"",
  postownername:"",
  posts:[],
    init() {
      var id=0
        this._super(...arguments);
        this.store.findAll('userdetails').then ((userdetail) => {
         for(var j=0;j<userdetail.content.length;j++){
              if(id<parseInt(userdetail.content[j].__recordData.__data.noId) || j==0){
                id=parseInt(userdetail.content[j].__recordData.__data.noId)
                this.CurrentUserName=userdetail.content[j].__recordData.__data.name
              }
          } 
        });
      this.store.findAll('registeruserdetails').then((registerdetail)=>{
        for(var j=0;j<registerdetail.content.length;j++){
          if(registerdetail.content[j].__recordData.__data.name == this.CurrentUserName){
                var photo=registerdetail.content[j].__recordData.__data.photourl;
                break;
          }
          else if(this.CurrentUserName=="Admin"){
            var photo="assets/image/admin.jpg"
            break;
          }

          else if(this.CurrentUserName=="Guest"){
            var photo="assets/image/guest.png"
            break;
          }

        }
        this.photosrc=photo
        this.set("homePage",true) 
       
      })    
        this. CurrentUserName =name.name  
        this.photosrc=name.photosrc
        // console.log(this.searchpost)
        // if(this.searchpost==undefined){
          console.log("a")
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
                          id:obj.id,
                          postimg:obj.__recordData.__data.postimg,
                          profile:obj.__recordData.__data.profile

                        })
                      })
                      this.posts=array1;
                      console.log(this.posts);
                      this.set("Allpost",true)
                }
             })  
        
     },
    router: service(),
      @action
      edit(editPostValue){
        console.log(editPostValue)
        this.store.findRecord("post",editPostValue.id).then(()=>{
        
          // var editvalue1 =editPostValue.postTittle;
          // var editvalue2 = editPostValue.postSubject;
          // var editvalue3 =editPostValue.postStory;
          // var editvalue4=editPostValue.postimg;
          this.set("postvalue1",editPostValue.postTittle)
          this.set("postvalue2",editPostValue.postSubject)
          this.set("postvalue3",editPostValue.postStory)
          this.set("id", editPostValue.id)
          this.set("postimgvalue",editPostValue.postimg)
          // console.log(this.postOwner)
          this.set("homePage",false)
          this.set("editPage",true)
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
      deletepost(post){
        this.set("Allpost",false)
           console.log("AA")
       this.store.peekRecord("post",post.id).destroyRecord().then(()=>{
        // location.reload()
        // 
        // this.set("homePage",true) 
          this. init()
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
          this.set("commentPage",true)
          this.set("homePage",false)
     },
     @action
     more(){
       if(this.moreoptionCount==0){
        this.set("moreoptionCount",1);
        this.set("option",true);
       }
       else{
        this.set("moreoptionCount",0);
        this.set("option",false);
       }
     },


     @action
     viewPost(viewPostValue){
      //  console.log("viewPost")
       this.store.findRecord("post",viewPostValue.id).then(()=>{
        this.set("postvalue1",viewPostValue.postTittle)
        this.set("postvalue2",viewPostValue.postSubject)
        this.set("postvalue3",viewPostValue.postStory)
        this.set("id", viewPostValue.id)
        this.set("postimgvalue",viewPostValue.postimg)
        this.set("postOwner",viewPostValue.profile)
        this.set("postownername",viewPostValue.userName)
        
        // console.log(this.postvalue1)
        // console.log(this.postvalue2)
        // console.log(this.postvalue3)
        // console.log(this.postimgvalue)
        this.set("viewPostpage",true)
        this.set("homePage",false)
       
       });
       
      
     },

    // @action
    // search(){
    //  this.set("Allpost",false)
      
     
    // //  console.log(this.searchpost)
    //  this.store.findAll('post').then ((userPost) => {
    //   this.init()
    // //     var array1=[];
    // //     var content=userPost.content;
    // //     if(userPost.content!=null){
    // //           userPost.content.map((obj, index) => {
    // //             if(obj.__recordData.__data.userName==this.searchpost){
    // //               array1.push({
    // //                 postTittle:obj.__recordData.__data.postTittle,
    // //                 postSubject:obj.__recordData.__data.postSubject,
    // //                 userName:obj.__recordData.__data.userName,
    // //                 postId:obj.__recordData.__data.postId,
    // //                 postStory:marked(obj.__recordData.__data.postStory),
    // //                 id:obj.id,
    // //                 postimg:obj.__recordData.__data.postimg,
    // //                 profile:obj.__recordData.__data.profile

    // //               })
    // //             }
    // //           })
    // //           this.posts=array1;
    // //           console.log(this.posts);
              
    // //     }
    // //      
    //   })
   
     
    // }


      
})

