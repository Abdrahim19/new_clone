const loction_box = document.querySelector('.loction-box');
const close  = document.getElementById('close')
const loction_button = document.querySelector('.Select-Country');
const shadow = document.querySelector('.bg-shadow');
const policie_link=  document.querySelector('.policie-link')
const policie_tooltip =  document.querySelector('.policie-tooltip')
const arrow_drop_down =  document.querySelector('.policie-svg')
const shope_link =  document.querySelector('.shope-link')
const shope_icon =  document.querySelector('.shope-link svg')
const big_tool_tip =  document.querySelector('.big-tool-tip')
const cart_button =  document.querySelector('.bi-lock-fill')
const cart =  document.querySelector('.cart')
const close_cart =  document.getElementById('close-cart')
const mobile_menu =  document.getElementById('mobile-menu')
const navlinks = document.querySelector('.navlinks');


console.log(loction_button);









loction_button.addEventListener('click' , () => {
    loction_box.classList.add('active');
    shadow.toggleAttribute('hidden');
})
close.addEventListener('click' , () => {
    loction_box.classList.remove('active');
    shadow.removeAttribute('hidden');
})

policie_link.addEventListener('click' , () => {
    policie_tooltip.classList.toggle('active');
    console.log(arrow_drop_down);
    if (policie_tooltip.classList.contains('active')) {
        arrow_drop_down.style.transform = 'rotate(180deg)';
    } else {
        arrow_drop_down.style.transform = 'rotate(0deg)';

    }
})
shope_link.addEventListener('click' , () => {
    big_tool_tip.classList.toggle('active');
    if (big_tool_tip.classList.contains('active')) {
        shope_icon.style.transform = 'rotate(180deg)';
    } else {
        shope_icon.style.transform = 'rotate(0deg)';

    }
})
cart_button.addEventListener('click' , () => {
    cart.classList.add('active');
    shadow.toggleAttribute('hidden');
})
shadow.addEventListener('click' , () => {
    shadow.toggleAttribute('hidden');
    cart.classList.remove('active');
    navlinks.classList.remove('active');
    loction_box.classList.remove('active');


})

close_cart.addEventListener('click' , () => {
    cart.classList.remove('active');
    shadow.toggleAttribute('hidden');
    navlinks.classList.remove('active');

})


// start fqo logic section 

const fqo_boxes = document.querySelectorAll('.fqo-box');

fqo_boxes.forEach((fqo_box) => {
  fqo_box.addEventListener('click', () => {
    console.log(fqo_box);
    fqo_box.classList.toggle('active');
  });
});
// end fqo logic section 

mobile_menu.addEventListener('click' , () => {
    navlinks.classList.add('active');
    shadow.toggleAttribute('hidden');
})

const contentElement = document.getElementById('dynamic-content');
const texts = ['HEAT BENDABLE WOODEN MOULDINGS', 'POSH CHALK LUXURY COATINGS', 'ULTRA DURABLE STENCILS'];
let index = 0;

// Function to change the content
function changeContent() {
  contentElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}

// Call the function to change the content every 5 seconds
setInterval(changeContent, 7000);


//  start make sticky navbar 

// Get the navbar
const navbar = document.getElementsByTagName("nav")[0];
console.log(navbar);

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynavbar() {
    console.log(window.scrollY);
    if (window.scrollY > 100) {    
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');    
    }
  }
  document.addEventListener('scroll', stickynavbar);