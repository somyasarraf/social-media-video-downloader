import React from 'react'
/* import './App.css'; */

/* 
const url = 'https://youtube-video-download-info.p.rapidapi.com/dl?id=711Bnqk8uWs';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '192c8ab208msh41b87a56fa39d0dp1f953cjsnd84f709614f2',
		'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
	}
};

const fetchData = (id)=>{
  
} */











const youtube =() => {
  return (
    <>
      <img src="./image/youtube.png" alt="youtube" width="200" height="200"  class="facebook-icon"></img>
 
      <div class="inputContainer">
        <input required="required" id="inputField" placeholder="URL" type="text"/>
        <label class="usernameLabel" for="inputField">Youtube</label>
        <svg viewBox="0 0 448 512" class="userIcon"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
    </div>
    </>
  )
}

export default youtube;