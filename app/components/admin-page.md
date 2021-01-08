 <div class="fulldiv1">
    <div class="title">

#  ***Admin Page***
</div>
   <div class=" Adminregisterbox">
        <Input class="name" placeholder="Enter a Name" type="text" @value={{value}} />
        <Input class="age" placeholder="password" type="password" @value={{value1}}/>
        <button class="Asbutton"   onclick={{action "Admin"}} >Sumbit</button>
        <LinkTo @route="index" class="Abackbutton" >Back</LinkTo>
</div>
<div class="registerImage"></div>
  
</div> 