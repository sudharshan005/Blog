<div class="fulldiv"> 
 <div class="homeTittle">
                 <div class="homeImage"></div>
                 <LinkTo @route="index" class="image3"></LinkTo>
                 <div class="image4"></div>
                 <div class="image5"></div>
 </div>
<div class="writebox">
        
   # ***Tittle***
  <Textarea class="textArea" @value={{value1}} placeholder="Enter a post Tittle"></Textarea>

   # ***Subject***
 <Textarea class="textArea" @value={{value2}} placeholder="Enter a post Subject"></Textarea>

   # ***Story***
<Textarea class="textAreaStory" @value={{value3}} placeholder="Enter a post Story"></Textarea>
               <Input type="file" class="textImage"/>         
</div>
         <LinkTo @route="homepage" class="dbutton" onclick={{action "valuepass"  }}>Done</LinkTo>
          <LinkTo @route="homepage" class="backbutton4" >back</LinkTo>
</div> 