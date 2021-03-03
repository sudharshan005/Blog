import Component from '@ember/component';
 import { action } from '@ember/object';
 import { inject as service } from '@ember/service';
 import firebase from 'firebase/app';
export default Component.extend({
    boolean:false,
    boolean1:true,
    store:service('store'),
    firebaseApp: service (),
    @action
    editpost(){
        console.log(this.id)
        var id=this.id;
        // var replaceValue=this.postvalue;
      this.store.findRecord('post',id).then((post)=> {

            console.log(post)

            post.postTittle = this.value1,
            post.postSubject=this.value2,
            post.postStory=this.value3

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
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    }
})
