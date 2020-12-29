import Component from '@ember/component';
 import { action } from '@ember/object'
 import { inject as service } from '@ember/service';
export default Component.extend({
  CurrentUserName:null,
  photosrc:null,
  valuepass:false,
  valuepass1:true,
  valuepass2:false,
  id:null,
  postvalue1:"",
  postvalue2:"",
  postvalue3:"",
  parentid:null,
    init() {
        this._super(...arguments);
        var userdetail=JSON.parse(localStorage.getItem("userdetails"));
        const keys = Object.keys(userdetail)
        for (const key of keys) {       
          var  name= userdetail[key]
          break;
        }
        this. CurrentUserName =name.name  
        this.photosrc=name.photosrc
        console.log(this.CurrentUserName)
       
        var userPost=JSON.parse(localStorage.getItem("userPost")); 
        if(userPost!=null){
            var array1=[];      
                const keys = Object.keys(userPost)
                console.log(keys)
                for (const key of keys) {
                    console.log(key)           
                array1.push(userPost[key])            
                }       
        }   
        this.array2=array1      
    },
    router: service(),
      @action
      edit(){
        
        var CurrentUserName ;
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
        }
      },
      router: service(),
      @action
      deletepost(){
        var CurrentUserName
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
      }
      location.reload()
     
    },

     @action
     comment() {
      this.set("parentid",event.target.id);
      this.set("valuepass2",true)
      this.set("valuepass1",false)
     }

    

      
})

