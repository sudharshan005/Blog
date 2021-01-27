import Component from '@ember/component';
 import { action } from '@ember/object';
 import marked from "marked/lib/marked.esm.js";
 import { inject as service } from '@ember/service';
export default Component.extend({
    boolean:false,
    boolean1:true,
    @action
    editpost(){
        // console.log(this.get("id"))

        // var replaceValue=this.postvalue;
        var userPost=JSON.parse(localStorage.getItem("userPost"));
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
       this.set("boolean1", false);

    },
    @action
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    }
})
