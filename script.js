
// SHOW NAV
function ShowNav() {
    var navicon = document.getElementById("navicon");
    var navlinks = document.querySelectorAll("header nav");
    if (navlinks.length > 0) {
      for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.toggle("show");
      }
      if (navlinks[0].classList.contains("show")) {
        navicon.className = "fa-solid fa-x";
      } else {
        navicon.className = "fa-solid fa-bars";
      }
    }
  }

// NAV ACTIVE BAR
function setActiveLink() {
    const navlink = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navlink.forEach(link => link.classList.remove('active'));
            navlink[index].classList.add('active');
        }
    });
}
window.addEventListener('scroll', setActiveLink);
// ANIMATION PREVIEW
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const animationskills = document.querySelectorAll('.section-skills-content');
  const animationprojects = document.querySelectorAll('.section-projects-content')

  animationskills.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
  animationprojects.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', handleScroll);