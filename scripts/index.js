



let SlideshowArr=JSON.parse(localStorage.getItem("Slidemovies")) || [];
let img1= "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_NoTimetoDieNewPoster_Launch/57777935-1c0f-45c3-994a-2821bc05c8b4._UR3000,600_SX1500_FMwebp_.jpeg";

let img2="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_GoodLuckSakhi_Launch/81ea658f-296c-4308-a5e6-7d65aabddfe7._UR3000,600_SX1500_FMwebp_.jpeg";

let img3="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PushpaTheRise_Launch_V2/0bf5f39f-add5-4519-b2fc-78c43af11434._UR3000,600_SX1500_FMwebp_.jpeg";

let img4="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_BajiraoMastani_EN_V2/ebe32829-38d2-46f1-b889-add51838ebdf._UR3000,600_SX1500_FMwebp_.jpeg";

let img5="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TuckJagadishLaunch/968864a9-6d38-49ef-841b-90dd7237aa11._UR3000,600_SX1500_FMwebp_.jpeg";

let img6="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_WrathofMan_LP_PC/73ce84ce-dafb-4b38-8965-a4cfd14e87ab._UR3000,600_SX1500_FMwebp_.jpeg";

let img7="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_VHindi/cbb3aaff-7b64-4e19-ae12-0b1311162890._UR3000,600_SX1500_FMwebp_.jpg";

let img8="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SareiluNeeravarum/95131dad-f522-4cb7-8d75-dee00bc7b3ee._UR3000,600_SX1500_FMwebp_.jpg";

let img9="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_StillWater_LP_Disc499/49064f83-038d-4881-81fe-19dcb6725e85._UR3000,600_SX1500_FMwebp_.jpeg";

SlideshowArr.push(img1, img2, img3, img4, img5, img6, img7, img8, img9);
localStorage.setItem("Slidemovies", JSON.stringify(SlideshowArr));
console.log(SlideshowArr);



let slideshow=document.getElementById("slideshow");
let i=1;

let img=document.createElement('img')
   img.src=SlideshowArr[0]
   
   slideshow.append(img);
   
   id = setInterval(function(){

       if(i==SlideshowArr.length){
           i=0;
       }

   let image=SlideshowArr[i]//url
   slideshow.innerHTML=null;

   let img=document.createElement('img')
   img.src=image
   
   slideshow.append(img);
   i++;
   }, 3000);    

   
   let moviesObj = [
   {
     title: "Kabir Singh",
     rating: 7.8,
     url: "https://rukminim1.flixcart.com/image/416/416/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=70",
   },
   
   {
     title: "83",
     rating: 7.4,
     url: "https://upload.wikimedia.org/wikipedia/en/6/69/83_film_poster.jpg",
   },
   {
     title: "Jai Bhim",
     rating: 9.5,
     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qDZaYn24GKD8BU4zfG8-7YQlefDQWOT6dUhbflLAICnhF_V47ZxpnKqG6zHOS80VHBs&usqp=CAU",
   },
   
   {
     title: "Shershaah",
     rating: 8.2,
     url: "https://i.scdn.co/image/ab67616d0000b273ab827cdec4b3fc1b02bfdb1e",
   },
   {
     title: "Pushpa The Rising Part-1",
     rating: 8.8,
     url: "https://interviewtimes.net/wp-content/uploads/2022/02/5.jpg",
   },
   {
     title: "Antim",
     rating: 7.3,
     url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z562203/portrait/1920x770f86e37b3d5cd4766b4327cbb2b4608cc.jpg",
   },
   {
     title: "Bob Biswas",
     rating: 6.9,
     url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z544916/portrait/1920x770141dcb00909443ec8d04dbc10d8e7f6c944beb98e417497b944a409681c374c0.jpg",
   },
   {
     title: "URI: The Surgical Strike",
     rating: 8.6,
     url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-33204/portrait/1920x770ab13e3472dce436a9e87bcd9b77bfad4.jpg",
   },
   {
     title: "A Thursday",
     rating: 8.3,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6182/1116182-v-a4ff74b3d55b",
   },
   {
     title: "Prince of Persia",
     rating: 6.6,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4882/674882-v",
   },
   {
     title: "Atrangi Re",
     rating: 6.7,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2938/1092938-v-01ce06b14a2e",
   },
   {
     title: "Tanhaji: The Unsung Worrier",
     rating: 8.0,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7676/647676-v",
   },
   {
     title: "Sanak",
     rating: 7.1,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8857/1068857-v-d30bc5e504a4",
   },
   {
     title: "Baaghi 3",
     rating: 5.5,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
   },
   {
     title: "The Big Bull",
     rating: 7.7,
     url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2979/1112979-v-ce5258e97d5f",
   }
   ];
   let moviesData=JSON.parse(localStorage.getItem("moviesObj")) || [];
localStorage.setItem("moviesObj", JSON.stringify(moviesObj));  
console.log(moviesObj);




   
//     function movieLinks(title, rating, url){
//         this.name=title;
//         this.imdb=rating;
//         this.imgage=url;
//     }
//     let obj1=new movieLinks("Pushpa The Rising Part-1",9.9,'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/nasjtaauezqdp21h_1641377495.jpeg');
//     let obj2=new movieLinks("Pushpa The Rising Part-1",9.9,'https://qph.fs.quoracdn.net/main-qimg-3d265df677b82e35e5021a7807a70594-pjlq');
//     let obj3=new movieLinks("Pushpa The Rising Part-1",9.9,'https://static.india.com/wp-content/uploads/2021/12/pjimage-22-7.jpg');
//     let obj4=new movieLinks("Pushpa The Rising Part-1",9.9,'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2f868b1af2e5dda33e3f0898eca200e0add09c22fca589849bee77fd6b737950._UY500_UX667_RI_V_TTW_.jpg');
//     let obj5=new movieLinks("Pushpa The Rising Part-1",9.9,'https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg');
//     let obj6=new movieLinks("Pushpa The Rising Part-1",9.9,'https://m.media-amazon.com/images/M/MV5BNmM2OGQyNDUtY2M1MC00MmY0LWIyOWQtZjhmMzEzNzVjMjUzL2ltYWdlXkEyXkFqcGdeQXVyNzE2NjgwMDY@._V1_.jpg');
//     let obj7=new movieLinks("Pushpa The Rising Part-1",9.9,'https://images.prismic.io/nimsdai/b6d80c6c-5a3e-4966-a913-dcbd6c3b900f_EN-US_Main_01_16X9_RGB_POST.jpg?auto=format&rect=0,0,2500,1406&w=1200&h=675&dpr=1.5');
//     let obj8=new movieLinks("Pushpa The Rising Part-1",9.9,'https://www.meinstyn.com/wp-content/uploads/2020/04/Kabir-Singh-Movie-Dialogues-Full-HD-Poster-Desktop-Wallpaper.jpg');
//     let obj9=new movieLinks("Pushpa The Rising Part-1",9.9,'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/nasjtaauezqdp21h_1641377495.jpeg');
//     let obj10=new movieLinks("Pushpa The Rising Part-1",9.9,'https://qph.fs.quoracdn.net/main-qimg-3d265df677b82e35e5021a7807a70594-pjlq');
//     let obj11=new movieLinks("Pushpa The Rising Part-1",9.9,'https://static.india.com/wp-content/uploads/2021/12/pjimage-22-7.jpg');
//     let obj12=new movieLinks("Pushpa The Rising Part-1",9.9,'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2f868b1af2e5dda33e3f0898eca200e0add09c22fca589849bee77fd6b737950._UY500_UX667_RI_V_TTW_.jpg');
//     let obj13=new movieLinks("Pushpa The Rising Part-1",9.9,'https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg');
//     let obj14=new movieLinks("Pushpa The Rising Part-1",9.9,'https://m.media-amazon.com/images/M/MV5BNmM2OGQyNDUtY2M1MC00MmY0LWIyOWQtZjhmMzEzNzVjMjUzL2ltYWdlXkEyXkFqcGdeQXVyNzE2NjgwMDY@._V1_.jpg');
//     let obj15=new movieLinks("Pushpa The Rising Part-1",9.9,'https://images.prismic.io/nimsdai/b6d80c6c-5a3e-4966-a913-dcbd6c3b900f_EN-US_Main_01_16X9_RGB_POST.jpg?auto=format&rect=0,0,2500,1406&w=1200&h=675&dpr=1.5');
   
//     ObjArr.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj15);
   // localStorage.setItem("moviesObj", JSON.stringify(moviesObj));
//     console.log(ObjArr);


   let movies=document.getElementById("movies");
appendMovies(moviesObj);
function appendMovies(moviesObj){


   moviesObj.map(function(elem){
   
   let mainDiv=document.createElement('div');
   
   let imgDiv=document.createElement('div')
   let img=document.createElement('img')
   img.src=elem.url;

   imgDiv.append(img)


   let contentDiv=document.createElement('div')

   let title=document.createElement('p')
   title.innerText=elem.title

   // let year=document.createElement('p')
   // year.innerText=elem.year

   let rating=document.createElement('p')
   rating.innerText=elem.rating

   contentDiv.append(title, rating)

   // let type=document.createElement('p')
   // type.innerText=elem.Type


   mainDiv.append(imgDiv, contentDiv);
   movies.append(mainDiv);
    

   });

}

function sortItems(){
var sorting=document.getElementById("sorter").value;

console.log(sorting);
if(sorting=='h2l'){
 moviesObj.sort(function(item){
   return b.rating-a.rating;
 })
 appendMovies(moviesObj);
}
else if(sorting=='l2h'){
 moviesObj.sort(function(a,b){
   return a.rating-b.rating;
   
 })
 appendMovies(moviesObj);
}
}