
// Adds an event listener to detect when the user scrolls the window 

window.addEventListener('scroll', function () { 
    // Selects the navbar element 
    
    const navbar = document.querySelector('.navbar'); 
     // If the window is scrolled down, adds a class to style the navbar for scrolling 
    
     if (window.scrollY > 0) { 
        navbar.classList.add('navbar--scroll'); 
    } else { 
        
        // If not scrolled, removes the scroll styling from the navbar 
        navbar.classList.remove('navbar--scroll'); 
    } 
}); 