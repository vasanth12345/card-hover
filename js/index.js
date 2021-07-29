const cardbox= document.querySelector('.cardbox');
const card= document.querySelector('.card');
const img= document.querySelector('.ice');
const h2 = document.querySelector('.title');
const st = document.querySelector('.stitle');


cardbox.addEventListener('mousemove', (e)=> {
  
let x = (window.innerWidth / 2 -e.pageX) /10 ;
let y = (window.innerHeight / 2 -e.pageY) /10 ;
//alert(x + " "+ y);

card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;

});

cardbox.addEventListener('mouseenter', ()=> {
  
card.style.transition = "none";
 
st.style.transform = "translateZ(50px)";
h2.style.transform = "translateZ(70px)";
ice.style.transform = "translateZ(40px)";
  
});

cardbox.addEventListener('mouseleave', ()=> {
  
card.style.transition = "all 0.5s ease";

card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  
});