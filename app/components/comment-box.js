import Component from '@ember/component';
 import { action } from '@ember/object'
export default Component.extend({
    array:[],
    boolean1:true,
    boolean:false,
    CurrentUserName:null,

        init(){
            this._super(...arguments);
            var array=JSON.parse(localStorage.getItem(this.parentid))

            this.set("array",array)
            var userdetail=JSON.parse(localStorage.getItem("userdetails"));
           const keys = Object.keys(userdetail)
           for (const key of keys) {
            // console.log(key+","+keys)
          var  name= userdetail[key]
          break;
        }
        this. CurrentUserName =name.name 
        },
    @action
    commentStore(){
        var array=[];   
       var Carray =JSON.parse(localStorage.getItem(this.get("parentid")));
            if(Carray==null){
                   var  id=1;
            }
            else{
                var id  = Carray.length+1
            }    
       var value=this.value1
        if(value!=undefined && value!==" "){
            var commentvalue={
                value: this.value1,
                Name:this.CurrentUserName,
                id:id,
            }
            console.log(commentvalue)
            array.push(commentvalue)
            
            var exArray = JSON.parse(localStorage.getItem(this.get("parentid")));
        
            if(exArray==null){
            localStorage.setItem(this.get("parentid"),JSON.stringify(array));
            }
            else if(exArray!=null)  {
            var newArray = array.concat(exArray);
            localStorage.setItem(this.get("parentid"),JSON.stringify(newArray));
            }
        }
        this. array=JSON.parse(localStorage.getItem(this.get("parentid")))
            console.log(this.array)

            this.set("value1"," ")
            this.set("boolean1", false);
            this.set("boolean", true);
            
    },
    @action
    back(){
           this.set("boolean1", false);
            this.set("boolean", true);
    },

    @action
    delete(){
        var id= event.target.id;
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
            
                
        }
    }
       
})
