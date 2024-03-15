import React from 'react'
/* import './App.css'; */
const facebook =() => {
  return (
    <>
      <img src="./image/facebook.gif" alt="facebook" width="200" height="200"  class="facebook-icon"></img>
 
      <div class="inputContainer">
        <input required="required" id="inputField" placeholder="URL" type="text"/>
        <label class="usernameLabel" for="inputField">Facebook</label>
        <svg viewBox="0 0 448 512" class="userIcon"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
    </div>
    </>
  )
}

export default facebook
