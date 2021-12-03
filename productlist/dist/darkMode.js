

// check local
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');


const enableDarkMode = () => {
  //  เปลี่ยนสี html
  document.getElementsByTagName('body')[0].style.backgroundColor = '#171717';
  document.getElementById("nav").style.backgroundColor = '#5F5F5F';   //navbar
  document.getElementById("NameShop").style.color = "white";  //ชื่อร้าน
  document.getElementById("cart").style.color = "white";
  //document.getElementById("CheckCart").style.color = "white";
  

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementById("nav").style.backgroundColor = 'white';   //navbar
  document.getElementById("NameShop").style.color = "black";  //ชื่อร้าน
document.getElementById("cart").style.color = "black";
 // document.getElementById("CheckCart").style.color = "black";

  
  localStorage.setItem('darkMode', 'disable');
}
 
// เช็คใน local

if (darkMode === 'enabled') {
  enableDarkMode();
}



darkModeToggle.addEventListener('click', () => {
 
  darkMode = localStorage.getItem('darkMode'); 
  
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  
  } else {  
    disableDarkMode(); 
  }
});