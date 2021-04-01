import Component from '@ember/component';
 import { action } from '@ember/object';
 import { inject as service } from '@ember/service';
 import firebase from 'firebase/app';
export default Component.extend({
    boolean:false,
    boolean1:true,
    store:service('store'),
    firebaseApp: service (),
    photosrc:null,
    @action
    editpost(){
        console.log(this.id)
        var id=this.id;
        // var replaceValue=this.postvalue;
        if(this.photosrc==null){
          this.photosrc=this.value4
        }
      this.store.findRecord('post',id).then((post)=> {

             console.log(this.value4)

            post.postTittle = this.value1,
            post.postSubject=this.value2,
            post.postStory=this.value3,
            post.postimg=this.photosrc,

            post.save().then(()=>{
                this.set("boolean1", false);
                this.set("boolean", true);
              });
          })
       /* var userPost=JSON.parse(localStorage.getItem("userPost"));
        for (var i = 0; i < userPost.length; i++){
         var obj = userPost[i];
            var objId = obj.id;
            // console.log(replaceValue)
            
            if(objId == this.get("id") ){
             
                userPost[i].postTittle=this.value1
                userPost[i].postSubject=this.value2
                userPost[i].postStory=this.value3
                
            }
        }
       console.log(userPost)

       localStorage.setItem("userPost",JSON.stringify(userPost));
       this.set("boolean", true);
       this.set("boolean1", false);*/

    },

    @action
    image(){ 
    var reader=new FileReader();
    reader .readAsDataURL(event.target.files[0])

   reader.addEventListener("load" ,()=>{
     localStorage.setItem("postimgData", reader.result);
     this.photosrc=reader.result;
   })
  },
    @action
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    }
})
