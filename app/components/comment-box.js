 import Component from '@ember/component';
 import { action } from '@ember/object';
 import{ inject as service } from '@ember/service';
 export default Component.extend({
    comments:[],
    boolean1:true,
    boolean:false,
    value2:false,
    CurrentUserName:null,
    store:service('store'),
        init(){   
           this.set("boolean1",true) 
           this._super(...arguments);
           this. comments=null;
            var array2=[]
            this.store.findAll("postComments").then((postcomment)=>{
                console.log(postcomment.content.length)
                postcomment.content.map((obj, index) => {
                    console.log(obj.__recordData.__data.noId+","+this.parentid)
                    if(obj.__recordData.__data.noId==this.parentid){
                        array2.push({
                            comment:obj.__recordData.__data.comment,
                            name:obj.__recordData.__data.name,
                            id:obj.id,
                            img:obj.__recordData.__data.userimg
                            
                        });
                        console.log(obj.__recordData.__userimg)
                    }  
          
                })
                this.comments=array2 
                console.log(this.comments)  
                this.CurrentUserName=this.UserName;
                console.log(this.comments)  
                this.set("value2",true)
                
                   
            })
        },
    @action
    commentStore(){
        this.set("value2",false)
        var photo;
        console.log(this.value)
            if(this.value1!=undefined){
                this.store.findAll('registeruserdetails').then((registerdetail)=>{
                    for(var j=0;j<registerdetail.content.length;j++){
                      if(registerdetail.content[j].__recordData.__data.name == this.CurrentUserName){
                          console.log(this.CurrentUserName+" , "+registerdetail.content[j].__recordData.__data.name)
                             photo=registerdetail.content[j].__recordData.__data.photourl;
                            break;
                      }
                    }
            }).then(()=>{
                var comment=this.store.createRecord("postComments",{
                    name:this.UserName,
                    noId:this.parentid,
                    comment:this.value1,
                    userimg:photo
                });
                comment.save().then(()=>{
                    // this.set("boolean1", false);
                    // this.set("boolean", true);
                    this.init()
                   
                })
            })

            }
         else{
                this.set("boolean1", false);
                this.set("boolean", true);
            }         
    },
    @action
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    },
    @action
    
    delete(deletecomment){
        this.set("value2",false)
        this.store.peekRecord("postComments",deletecomment.id).destroyRecord().then(()=>{
                
            // this.set("boolean1", false);
            // this.set("boolean", true);
            this.init()
           })
    }
       
})
