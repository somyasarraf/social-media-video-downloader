import React from 'react';

const Instagram = () => {
  async function fetchData(url) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '192c8ab208msh41b87a56fa39d0dp1f953cjsnd84f709614f2',
        'X-RapidAPI-Host': 'instagram-post-reels-stories-downloader.p.rapidapi.com',
      },
    };

    try {
      let response = await fetch(`https://instagram-post-reels-stories-downloader.p.rapidapi.com/instagram/?url=${url}`, options);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      let data = await response.json();
      
      return data; // Return the data fetched
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error; // Re-throw the error to handle it later
    }
  }
  
  async function downloadFile(file) {
  try {
    
    const data = await fetchData(file);
      if (!data) {
        throw new Error('No data to download');
      }
  
     
      if (data instanceof Blob) {
        let url = URL.createObjectURL(data);
        let atag = document.createElement("a");
        atag.href = url;
        atag.download = "filename";
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL(url);
      } else {
        throw new Error('Invalid data type for creating object URL');
      }
    } catch (error) {
      alert("Failed to download the file");
      console.error('Error downloading file:', error.message);
    }
  
}

  React.useEffect(() => {
    const btn = document.getElementById('hello');

    const handleClick = async (e) => {
      e.preventDefault();
      const inputField = document.getElementById('inputField');
      try {
        await fetchData(inputField.value);
        downloadFile(inputField.value);
      } catch (error) {
        console.error('Error handling click:', error.message);
      }
    };

    btn.addEventListener('click', handleClick);
  });

  


  return (
    <>
      <img src="./image/instagram (1).png" alt="instagram" width="200" height="200" className="facebook-icon"></img>

      <div className="inputContainer">
        <input required="required" id="inputField" placeholder="URL" type="text" />
        <label className="usernameLabel" htmlFor="inputField">
          Instagram
        </label>
        <svg viewBox="0 0 448 512" className="userIcon">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
        </svg>
      </div>

      <div className="download-btn">
        <button className="button" id="hello">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">Download Now</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Instagram;






