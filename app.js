let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('li a');

window.onscroll = () => {
  sec.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight - 70;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('.menu__link[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
