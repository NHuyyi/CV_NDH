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

const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // ngăn reload trang

    const fullName = this.fullname.value.trim();
    const email    = this.email.value.trim();
    const message  = this.message.value.trim();

    // tiêu đề email
    const subject = `Liên hệ từ ${fullName}`;
    
    // nội dung email, %0A là newline
    const body = 
      `Tên: ${fullName}%0A` +
      `Email: ${email}%0A%0A` +
      `Nội dung:%0A${encodeURIComponent(message)}`;

    // bật trình soạn email mặc định
    window.location.href = 
      `mailto:n.dd.huy.05@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${body}`;
  });

