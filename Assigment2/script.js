const $ = document.querySelector.bind(document);

$("#toggleDarkMode").addEventListener('click', toggleDark)
    
function toggleDark(){
    if($(':root').hasAttribute('dark-mode')){
        localStorage.setItem('mode', 'light')
        $(':root').removeAttribute('dark-mode');
    }else{
        localStorage.setItem('mode', 'dark')
        $(':root').setAttribute('dark-mode', true)
    }
}

// function main(){
if(localStorage.getItem('mode') == 'dark'){
  $(':root').setAttribute('dark-mode', true) 
}



// document.addEventListener('DOMContentLoaded', function () {
//     const darkModeToggle = document.createElement('div');
//     darkModeToggle.classList.add('dark-mode-toggle');
//     darkModeToggle.textContent = 'Toggle Dark Mode';
//     document.body.appendChild(darkModeToggle);
  
//     darkModeToggle.addEventListener('click', toggleDarkMode);
  
//     // Check localStorage for dark mode preference
//     if (localStorage.getItem('darkMode') === 'enabled') {
//       document.body.classList.add('dark-mode');
//     }
  
//     function toggleDarkMode() {
//       document.body.classList.toggle('dark-mode');
  
//       // Update localStorage with dark mode preference
//       if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('darkMode', 'enabled');
//       } else {
//         localStorage.removeItem('darkMode');
//       }
//     }
  

//   });
  