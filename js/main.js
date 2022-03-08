//@prepros-append script.js


// image as background

function imageAsBackground()
{
    $.each($(".imageAsBackground"), function(index, val)
    {
        if ($(this).find("img").length>0)
        {
            $(this).css("background-image", 'url("'+$(this).find("img").attr("src")+'")');
        }
    });
}
imageAsBackground();


// parallax

let largeCircle = document.querySelector('.main-screen__circle_large');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    largeCircle.style.transform = 'translate(' + x * 100 + 'px, -' + y * 100 + 'px)';
});

let middleCircle = document.querySelector('.main-screen__circle_middle');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    middleCircle.style.transform = 'translate(-' + x * 150 + 'px, ' + y * 20 + 'px)';
});

let smallCircle = document.querySelector('.main-screen__circle_small');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    smallCircle.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});


// to show elements

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
}
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.about-me__cloud, .about-me__photo-box, .prices__form, .contact');
  for (let elm of elements) {
    observer.observe(elm);
}


// smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
