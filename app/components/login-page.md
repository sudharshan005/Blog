 <div class="fulldiv1">
    <div class="title">
    
# ***Login Page***
</div>
   <div class=" Aregisterbox">
        <Input class="name" placeholder="Enter a Name" type="text" @value={{value}} />
        <Input class="age" placeholder="password" type="password" @value={{value1}}/>
         <div class="or">----------- or -----------</div>
        <LinkTo @route="register" class="button">Create a new account</LinkTo> 
        <button class="sbutton"   onclick={{action "login"}} >Sumbit</button>
        <LinkTo @route="index" class="backbutton1" >Back</LinkTo>
</div>
<div class="loginImage"></div>
  

</div> 