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

emailjs.init("YOUR_USER_ID");

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
