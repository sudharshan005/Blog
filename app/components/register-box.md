 <div class="fulldiv1">
    <div class="title">

# ***Register Page***
 </div>
   <div class=" registerbox">
          <Input class="name" placeholder="Enter a email" type="text" @value={{value2}} />
        <Input class="name" placeholder="Enter a Name" type="text" @value={{value}} />
        <Input class="age" placeholder="password" type="password" @value={{value1}}/>
         <select class="select" placeholder="select your gender">
            <option>male</option>
            <option>female</option>
            <option>others</option>
         </select>
    <Input type="file" class="profilepic"  @value={{valuephoto}}/>
     <LinkTo @route="homepage" class="sbutton" onclick={{action "val"}} >Sumbit</LinkTo>
    <LinkTo @route="loginpage" class="backbutton1" >Back</LinkTo>
</div>
<div class="registerImage"></div>
  

</div> 

