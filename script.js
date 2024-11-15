const key = "M_dYs4MgUD4mF78GHS_YNPpws_Zx7pnaYU-_U6dHDc8";
const url = `https://api.unsplash.com/photos/random/?client_id=${key}&count=10`;

let imgContainer = document.getElementById('img-container');

async function getPhotos(){
   
       try{ 
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        data.forEach(photo => {
            const img = document.createElement('img');
            img.src=photo.urls.small;
            imgContainer.appendChild(img);
        });
    }catch(error){
        console.error("Error in fetching photos : ",error);
        if(error.message.includes("Rate Limit Exceeded")){
            const img = document.createElement('img');
            img.src="images/rate_limit_exceed.png";
            imgContainer.appendChild(img);
        }
    } 

}

// endless scrolling event listner
window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>= document.body.offsetWidth){
        getPhotos();
    }
})

// Intial loading
getPhotos();