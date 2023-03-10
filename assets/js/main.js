const PAGES = document.querySelectorAll('.page');
const homePage = PAGES[0];

window.onscroll = e => {

  const offset = window.scrollY;
  performParallax(offset);
  if (offset > 10) {
    DOM.addState('header', 'scrolled');
  } else {
    DOM.remState('header', 'scrolled');

  }
  if (elementInView(homePage)) {

    homePage.style.backgroundColor = `rgba(0,0,0,${offset / 400})`;
  } else if (elementOutofView(homePage)) {
    homePage.style = "";
  }
}
const links = document.querySelectorAll(' a');
links.forEach((link) => {
  link.onclick = e => {
    // DOM.addState('body', 'dopa2');
    // setTimeout(() => {
    //   DOM.remState('body', 'dopa2');

    // }, 200);
    // checkUrl();

  }
});

function checkUrl() {
  const url = window.location.href;
  if (url.includes('#contact'))
    toPage('contact')
  else if (url.includes('#about'))
    toPage('about')
  else if (url.includes('#portfolio'))
    toPage('portfolio')
  else toPage('home')
}

function toPage(pageId) {
  // window.location.href = window.location.href.split('#')[0] + "#" + pageId;
  PAGES.forEach((page) => {
    page.classList.remove('show');
  });
  setTimeout(() => {

    DOM.addState(pageId, 'show');
  }, 300);
}
window.addEventListener('locationchange', function () {
  console.log('location changed!');
});
window.addEventListener('hashchange', () => {
  checkUrl();
})
checkUrl();