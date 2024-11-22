const images = [
    "images/main.jpg",
    "images/main2.jpg",
    "images/main3.png",
    "images/main4.png",
    "images/main5.jpg"
];

let currentImageIndex = 0;
const fadeElement = document.getElementById('background-fade');

images.forEach((image) => {
    const img = new Image();
    img.src = image;
});

function initializeBackground() {
    fadeElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    fadeElement.style.opacity = 1; 
}

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    setTimeout(() => {
        fadeElement.style.opacity = 0; 
        setTimeout(() => {
            fadeElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            fadeElement.style.opacity = 1; 
        }, 500);
    }, 3000); 
}

initializeBackground();
setInterval(changeBackgroundImage, 3000); 

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenSections = document.querySelectorAll('.hidden');

    const observerOptions = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    hiddenSections.forEach(section => observer.observe(section));
});

const loginButton = document.querySelector('.button');
const modal = document.getElementById('loginModal');
const closeButton = modal.querySelector('.close');
let currentUser = null; 
const signOutDropdown = document.createElement('div'); 
signOutDropdown.style.display = 'none'; 
signOutDropdown.innerHTML = '<button id="signOutBtn">Sign Out</button>';
loginButton.after(signOutDropdown); 

loginButton.addEventListener('click', () => {
    if (currentUser) {
        signOutDropdown.style.display = signOutDropdown.style.display === 'none' ? 'block' : 'none';
    } else {
        modal.style.display = 'flex'; 
    }
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    let userCount = localStorage.length; 
    let newUserKey = "user" + (userCount + 1); 

    const newUser = {
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    };

    localStorage.setItem(newUserKey, JSON.stringify(newUser));

    closeModal('registerModal');
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    let userFound = false; 

    for (let i = 0; i < localStorage.length; i++) {
        let userKey = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(userKey));

        if (user.username === loginUsername && user.password === loginPassword) {
            userFound = true;
            currentUser = user;  
            closeModal('loginModal');
            updateLoginButton(); 
            break;  
        }
    }
});


function updateLoginButton() {
    loginButton.textContent = currentUser.username;  
}

document.getElementById('signOutBtn').addEventListener('click', signOut);

function signOut() {
    currentUser = null; 
    loginButton.textContent = "Login";  
    signOutDropdown.style.display = 'none'; 
}


const loginSection = document.querySelector('.login-section');
const registerSection = document.querySelector('.register-section');


document.getElementById('to-register').addEventListener('click', function() {
    loginSection.style.display = 'none';  
    registerSection.style.display = 'block';  
});

document.getElementById('to-login').addEventListener('click', function() {
    registerSection.style.display = 'none'; 
    loginSection.style.display = 'block';  
});
function toggleShortcutMenu() {
    const shortcutMenu = document.getElementById("shortcut-menu");
    shortcutMenu.style.display = shortcutMenu.style.display === "block" ? "none" : "block";
}


function showReservationForm() {
    document.getElementById('reservationFormContainer').style.display = 'block'; 
    document.querySelector('.reservation-section').style.display = 'none'; 
}

function hideReservationForm() {
    
    document.getElementById('reservationFormContainer').style.display = 'none'; 
    document.querySelector('.reservation-section').style.display = 'block'; 
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (sectionId === 'reservation-section') {
            showReservationForm(); 
        }
    }
}




function showSocialMediaBox(event) {
    event.stopPropagation();  

   
    document.querySelector('.social-media-section').style.display = 'none';
    document.getElementById("socialMediaBox").style.display = 'block';

    
    document.addEventListener('click', closeSocialMediaBox);
}

function closeSocialMediaBox(event) {
    var box = document.getElementById("socialMediaBox");
    if (!box.contains(event.target)) {
       
        box.style.display = 'none';
        document.querySelector('.social-media-section').style.display = 'block';

        
        document.removeEventListener('click', closeSocialMediaBox);
    }
}


document.querySelector('.story-content').addEventListener('click', function () {
    this.classList.toggle('expanded'); 
});


function showReservationForm() {
    const reservationSection = document.querySelector('.reservation-section');
    const reservationForm = document.getElementById('reservationFormContainer');

    reservationSection.style.display = 'none'; 
    reservationForm.style.display = 'flex'; 
}

function hideReservationForm() {
    const reservationSection = document.querySelector('.reservation-section');
    const reservationForm = document.getElementById('reservationFormContainer');

    reservationForm.style.display = 'none'; 
    reservationSection.style.display = 'flex'; 
}

window.addEventListener('resize', () => {
    console.log('Screen resized: ', window.innerWidth);
});

function toggleStory() {
    const storyText = document.querySelector(".story-text");
    const toggleButton = document.querySelector(".toggle-story");
    const storySection = document.getElementById("bistro-nouveau-story");

    if (storyText.classList.contains("preview")) {
        storyText.classList.remove("preview");
        storyText.classList.add("expanded");
        toggleButton.textContent = "Read Less";

        storySection.style.height = "auto"; 
        document.body.style.height = "auto"; 
    } else {
        storyText.classList.remove("expanded");
        storyText.classList.add("preview");
        toggleButton.textContent = "Read More";

        storySection.style.height = ""; 
    }
}


function toggleSectionExpansion(section) {
    const selectedSection = document.querySelector(`.${section}`);
    selectedSection.classList.toggle('expanded');
}

document.querySelector('.reservation-section').addEventListener('click', () => {
    toggleSectionExpansion('reservation-section');
});

document.querySelector('.social-media-section').addEventListener('click', () => {
    toggleSectionExpansion('social-media-section');
});
