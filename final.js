
let userName = localStorage.getItem('name');
let userTheme = localStorage.getItem('theme');

if (!userName || !userTheme) {
  userName = prompt("What's your name?");
  userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();


  localStorage.setItem('name', userName);
  localStorage.setItem('theme', userTheme);
}


const welcome = document.getElementById("welcome-message");
if (welcome && userName) {
  welcome.textContent = `Welcome back, ${userName}`;
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
  }
}


applyTheme(userTheme);


const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Theme";


toggleButton.style.position = "fixed";  
toggleButton.style.bottom = "20px";     
toggleButton.style.right = "20px";      
toggleButton.style.padding = "10px";    
toggleButton.style.backgroundColor = "#444";  
toggleButton.style.color = "#fff";      
toggleButton.style.border = "none";     
toggleButton.style.cursor = "pointer";  

document.body.appendChild(toggleButton);


toggleButton.addEventListener('click', () => {
  userTheme = (userTheme === 'dark') ? 'light' : 'dark'; 
  localStorage.setItem('theme', userTheme); 
  applyTheme(userTheme); 
});


