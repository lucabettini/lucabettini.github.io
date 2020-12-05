const pswpElement = document.querySelectorAll('.pswp')[0]; 


function createGallery(items, imageId) {
    let image = document.getElementById(imageId); 
    image.addEventListener('click', (e) => {
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items); 
        gallery.init(); 
    }); 
}


const weatheringWithMe = [
    {
        src: './img/projects/weather-api/responsive.jpg', 
        w: 9248, 
        h: 6936
    },
    {
        src: './img/projects/weather-api/home.png',
        w: 1920, 
        h: 1053
    }, 
    {
        src: './img/projects/weather-api/example.png', 
        w: 1920, 
        h: 1053
    }, 
    {
        src: './img/projects/weather-api/coordinates.png', 
        w: 1905, 
        h: 1053
    }, 
   
]; 

createGallery(weatheringWithMe, 'weathering-with-me'); 



