import Component from '@ember/component';
import { action } from '@ember/object'
import{ inject as service } from '@ember/service';
export default Component.extend({
   
  store:service('store'),
  router: service(),
    photosrc:null,  
    imgMoveValue:false,
    profileset:false,
    @action
     val(){

      console.log(this.photosrc)
       var j=0;
       var details=this.store.createRecord('registeruserdetails',{
        name:this.value,
        password:this.value1,
        email:this.value2, 
        photourl:this.photosrc
       });
       details.save() 
       var id=0;
       this.store.findAll('userdetails').then ((detail) => {
         
         if(detail.content.length!=0){
             
          for(var i=0;i<detail.content.length;i++){
            if(id<parseInt(detail.content[i].__recordData.__data.noId) || i==0){
              id=parseInt(detail.content[i].__recordData.__data.noId) 
              j=id+1
            }
          }
         }
       }).then(()=>{
       
       var userdetails=this.store.createRecord('userdetails',{
        name:this.value,
        noId:j,
        password:this.value1    
       });  
       userdetails.save().then(() => {  
        this.router.transitionTo("homepage")

       });
    });
  
      },

      @action
      image(){    
      var  el = document.querySelector(".registerImage");
	    var reader = new FileReader();
         console.log(event.target.files[0])
	 
	    reader .readAsDataURL(event.target.files[0]);
	  	reader.onload = function() {
         	document.querySelector("#scream").setAttribute("src",reader.result);

		         var img = document.getElementById("scream");

			  img.onload=function(){
		         	var w =  parseInt(img.width)*1;
				        var h =  parseInt(img.height)*1;

				        var pw = (el.clientWidth - w) / 2;
				        var ph = (el.clientHeight - h) / 2;

				        console.log(pw);
				        console.log(ph);

				        el.setAttribute('style',
				                'background-image: url(' + reader.result + '); ' +
				                'background-size: ' + w +'px ' + h + 'px; ' +
				                'background-position: ' + pw + 'px ' + ph + 'px; ' +
				                'background-repeat: no-repeat');
              }
            }
           this.photosrc=reader.result
            // console.log(this.els)

          },

    
    //    var   attachEvent = function(node, event, cb)  {
    //      console.log("b")
    //        console.log(event)
    //        console.log(cb)
           
    //        console.log(node.attachEvent)
    //     if (node.attachEvent)
    //          // console.log(node.addEventListener('on'+event, cb));
    //         node.attachEvent('on'+event, cb)
    //     else if (node.addEventListener)
    //         node.addEventListener(event, cb);
    //     // console.log( node.addEventListener(event, cb));
    // };


   // var  stopEvent = function (e) {
   //       console.log("d")
   //      if(window.event) e.cancelBubble = true;
   //      else e.stopImmediatePropagation();
   //  };

    // @action
    //  imgMouseDown(e)
    // {
    //     // stopEvent(e);
    //      console.log("f")
    //    this. state.dragable = true;
    //     this.state.mouseX = e.clientX;
    //      this.state.mouseY = e.clientY;
    // };
      // @action
     
        

       
    // imgMouseMove (e)
    // {
    //     // stopEvent(e);
    //      console.log("g")
    //     if ( this.state.dragable)
    //     {
    //         var x = e.clientX -  this.state.mouseX;
    //         var y = e.clientY -  this.state.mouseY;

    //         var bg = el.style.backgroundPosition.split(' ');

    //         var bgX = x + parseInt(bg[0]);
    //         var bgY = y + parseInt(bg[1]);

    //         el.style.backgroundPosition = bgX +'px ' + bgY + 'px';

    //          this.state.mouseX = e.clientX;
    //          this.state.mouseY = e.clientY;
    //     }
    // };
   @action
   move(){
    var  el = document.querySelector(".registerImage");
    
    if(this.imgMoveValue==false){
      this.imgMoveValue=true
      console.log(this.imgMoveValue)
      el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = e.offsetX + "px";
        el.style.backgroundPositionY = e.offsetY + "px";
      });
      console.log(this.imgMoveValue)
    }
    else if(this.imgMoveValue==true){
      this.imgMoveValue=false
      console.log(this.imgMoveValue)
    }

  },

  @action
  profileboxfunction(){
    this.set("profileset",true)
  },

    //  if(this.imgMoveValue==true){ 
         
         
        // }
       
       
       
  // }

  // if(this.imgMoveValue==true){
  //   this.imgMoveValue=false
  //   console.log(this.imgMoveValue)
  // }
    // myGamePiece.image.src = "smiley.gif";
    // imgMouseUp(e)
    // {
    //     // stopEvent(e);  
    //      this.state.dragable = false;
    //      console.log("h")
    // };
  
      @action
      getDataURL () {

        var el = document.querySelector(".registerImage");
        var thumbbox = document.getElementById("thumbBox");	
       var img = document.getElementById("scream");
        //  console.log(el);
                   
        var width = parseInt(thumbbox.clientWidth),
                 height = parseInt(thumbbox.clientHeight),
                 dim = el.style.backgroundPosition.split(' '),
                 size = el.style.backgroundSize.split(' '),
 
                 dx = parseInt(dim[0]) - el.clientWidth/2 + width/2,
                 dy = parseInt(dim[1]) - el.clientHeight/2 + height/2,
                 dw = parseInt(size[0]),
                 dh = parseInt(size[1]),
                 sh = parseInt(img.height),
                 sw = parseInt(img.width);  
 
      var c = document.getElementById("tempimage");
         c.width = width;
             c.height = height; img
          var ctx = c.getContext("2d");
         ctx.drawImage(img, 0, 0, sw, sh, dx, dy, dw, dh);
     
        //  var reader = new FileReader();
       this.photosrc = c.toDataURL(this.photosrc)
   
       this.set("profileset",false)
      // reader .readAsDataURL( );
      // reader.onload = function() {
      //   console.log(reder.result)
      // }

    }

  });
    