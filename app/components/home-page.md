 {{#if valuepass1}}
 
 <div class="fulldiv">
         <div class="homeTittle">
                 <div class="homeImage"></div>
                 <input type="text" placeholder="Search" class="search">
                  <LinkTo @route="index" class="image3"></LinkTo>
                 <div class="image4"></div>
                 <div class="image5"></div>
         </div>

   <div class="profileBox">userName : **{{this.CurrentUserName}}**</div>
    {{!-- <div class="profilephoto"><img src={{profileBox}}  width="200" height="200"></div> --}}
    <img class="profilephoto" src="{{this.photosrc}}">
    <div class="postbox" >
      {{#each array2 as |array|}}
  <div class="posts"   >
    <div class="postTitle">
         <div class="profileNamebox">**{{array.userName}}**</div>
         {{#if (eq CurrentUserName "Admin")}}   
           <div class="deleteIcon" id={{array.id}}  onclick={{action "deletepost" }}></div>
                                 
          {{else}}  
           {{#if (eq array.userName CurrentUserName)}} 
  <div class="deleteIcon" id={{array.id}}  onclick={{action "deletepost" }}></div>
            {{/if}} 
         {{/if}}   
 </div>
 <div class="postContent">

 ***Tittle***
          <div class="postHeading">**{{array.postTittle}}**</div>
         <div class="postImage"></div>
 ***Subject***
         <div class="postsubject">{{array.postSubject}}</div>
***Story***
          <div class="poststory"><p>{{array.postStory}}</p></div>
</div>
  <div class="bottombox">
   {{#if (eq CurrentUserName "Admin")}}  
   <div class="editbutton" id={{array.id}}   onclick={{action "edit" }}>Edit</div>
    {{else}}  
      {{#if (eq array.userName CurrentUserName)}} 
      <div class="editbutton" id={{array.id}}   onclick={{action "edit" }}>Edit</div>
      {{/if}}
  {{/if}}
     <div class="commentbutton"  id={{array.id}} onclick={{action "comment" }}>comment</div>
</div>
</div>
   {{/each}}          
    </div> 
     {{#if (eq CurrentUserName "Admin")}}      
        <LinkTo @route="userdetail" class="useDetails">User Details</LinkTo>
     {{/if}}
     <LinkTo @route="newpost" class="pbutton"  >write a new post</LinkTo>
      {{!-- <LinkTo @route="index" class="backbutton2"  >Back</LinkTo> --}}
 </div>
{{/if}}
{{#if valuepass}}
    {{log valuepass}}
   {{edit-page id=id  value1=postvalue1 value2=postvalue2 value3=postvalue3}}
     {{/if}}

 {{#if valuepass2}}
        {{log valuepass}}
         {{comment-box parentid=parentid }}
     {{/if}}    