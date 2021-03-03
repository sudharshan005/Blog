import Component from '@ember/component';
 import { action } from '@ember/object'
import postComments from '../models/post-comments';
import{ inject as service } from '@ember/service';
export default Component.extend({
    comments:[],
    boolean1:true,
    boolean:false,
    value2:false,
    CurrentUserName:null,
    store:service('store'),
        init(){     
            this._super(...arguments);
            var array2=[]
            this.store.findAll("postComments").then((postcomment)=>{
                console.log(postcomment.content.length)
                postcomment.content.map((obj, index) => {
                    console.log(obj.__recordData.__data.noId+","+this.parentid)
                    if(obj.__recordData.__data.noId==this.parentid){
                        array2.push({
                            comment:obj.__recordData.__data.comment,
                            name:obj.__recordData.__data.name,
                            id:obj.id
                            
                        });
                    }    
                });  
                this.comments=array2   
                this.CurrentUserName=this.UserName;
                console.log(this.comments)
                this.set("value2",true);     
            });
        //     var array=JSON.parse(localStorage.getItem(this.parentid))

        //     this.set("array",array)
        //     var userdetail=JSON.parse(localStorage.getItem("userdetails"));
        //    const keys = Object.keys(userdetail)
        //    for (const key of keys) {
        //     // console.log(key+","+keys)
        //   var  name= userdetail[key]
        //   break;
        // }
        // this. CurrentUserName =name.name 
        },
    @action
    commentStore(){
            if(this.value1!="" ){
                console.log(this.value)
                var comment=this.store.createRecord("postComments",{
                    name:this.UserName,
                    noId:this.parentid,
                    comment:this.value1
                });
                comment.save().then(()=>{
                    this.set("boolean1", false);
                    this.set("boolean", true);
                    // this.set("value2",false); 
                })

            }
            else{
                // this.set("value2",false); 
                this.set("boolean1", false);
                this.set("boolean", true);
            }
    
    //     var array=[];   
    //    var Carray =JSON.parse(localStorage.getItem(this.get("parentid")));
    //         if(Carray==null){
    //                var  id=1;
    //         }
    //         else{
    //             var id  = Carray.length+1
    //         }    
    //    var value=this.value1
    //     if(value!=undefined && value!==" "){
    //         var commentvalue={
    //             value: this.value1,
    //             Name:this.CurrentUserName,
    //             id:id,
    //         }
    //         console.log(commentvalue)
    //         array.push(commentvalue)
            
    //         var exArray = JSON.parse(localStorage.getItem(this.get("parentid")));
        
    //         if(exArray==null){
    //         localStorage.setItem(this.get("parentid"),JSON.stringify(array));
    //         }
    //         else if(exArray!=null)  {
    //         var newArray = array.concat(exArray);
    //         localStorage.setItem(this.get("parentid"),JSON.stringify(newArray));
    //         }
    //     }
    //     this. array=JSON.parse(localStorage.getItem(this.get("parentid")))
    //         console.log(this.array)

    //         this.set("value1"," ")
    //         this.set("boolean1", false);
    //         this.set("boolean", true);
            
    },
    @action
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    },

    @action
    delete(deletecomment){

        this.store.peekRecord("postComments",deletecomment.id).destroyRecord().then(()=>{
            location.reload()
           })
        // var id= event.target.id;


       /* var id= event.target.id;
        var userComend=JSON.parse(localStorage.getItem(this.get("parentid")));   
        for (var i = 0; i < userComend.length; i++){
            var obj = userComend[i];
            var objId = obj.id;
            // console.log(CurrentUserName)
            if((objId == id && this.CurrentUserName==obj.Name)||(objId == id && this.CurrentUserName=="Admin") ){
                userComend.splice(i, 1);
                localStorage.removeItem(id);
                localStorage.setItem(this.get("parentid"), JSON.stringify(userComend));
                location.reload()
               break;               
           }
            
                
        }*/
    }
       
})
