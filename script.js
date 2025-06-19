// const video1 = document.getElementById('projectVideo1');
// const video2 = document.getElementById('projectVideo2');
// const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
// const sideBar = document.querySelector('.sidebar');
// const menu = document.querySelector('.menu-icon');
// const closeIcon = document.querySelector('.close-icon')


// const hoverSign = document.querySelector('.hover-sign');

// const videoList =[video1, video2, video3];

// videoList.forEach (function(video){
//     video.addEventListener("mouseover", function(){
//         video.play()
//         hoverSign.classList.add("active")
//     })
//     video.addEventListener("mouseout", function(){
//     video.pause();
//     hoverSign.classList.remove("active")
// })
// })

// Sidebar elements //
// menu.addEventListener("click", function(){
//     sideBar.classList.remove("close-sidebar")
//     sideBar.classList.add("open-sidebar")
// });

// closeIcon.addEventListener("click", function(){
//     sideBar.classList.remove("open-sidebar");
//     sideBar.classList.add("close-sidebar");
    
// })




// Video hover play/pause
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');
const videoList = [video1, video2, video3];

videoList.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play();
    hoverSign.classList.add('active');
  });
  video.addEventListener('mouseout', () => {
    video.pause();
    hoverSign.classList.remove('active');
  });
});

// Sidebar toggle
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener('click', () => {
  sideBar.classList.remove('close-sidebar');
  sideBar.classList.add('open-sidebar');
});
closeIcon.addEventListener('click', () => {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
});

// Initialize EmailJS (after including its SDK in HTML)
emailjs.init("YOUR_USER_ID");

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const { fullname, email, message } = contactForm;
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: fullname.value,
      reply_to: email.value,
      message: message.value
    })
    .then(() => {
      alert('Gửi email thành công!');
      contactForm.reset();
    })
    .catch(err => {
      alert('Gửi email thất bại: ' + JSON.stringify(err));
    });
  });
}
