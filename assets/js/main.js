const PAGES = document.querySelectorAll('.page');
const homePage = PAGES[0];
const middleContent = document.getElementById('middle-content')

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

function checkUrl(animate) {
  if (animate) {
    DOM.remState('page-cover', 'd-none');
    setTimeout(() => {
      DOM.addState('page-cover-main', 'animate');
      setTimeout(() => {
        setTimeout(() => {

          DOM.addState('page-cover', 'd-none');
        }, 300);
        DOM.remState('page-cover-main', 'animate');

      }, 1000);
    }, 100);
  }

  const url = window.location.href;
  middleContent.innerHTML = '';
  if (url.includes('#contact'))
    toPage('contact')
  else if (url.includes('#about')) {
    toPage('about')
    middleContent.innerHTML = `
      <i class="fas fa-code t1 fs-1 dposa dopa5 dparallax" style="top:30px; left:30px; filter:blur(1px)" data-parallax-speed="2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-java" style="top:30px; left:100px; filter:blur(1px)" data-parallax-speed="2"></i>
      <i class="fab fa-android t1 fs-1 dposa dopa5 dparallax" style="top:30px; left:170px; filter:blur(1px)" data-parallax-speed="2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-apple" style="top:100px; left:30px; filter:blur(1px)" data-parallax-speed="2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-css3" style="top:100px; left:100px; filter:blur(1px)" data-parallax-speed="2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-js-square" style="top:170px; left:30px; filter:blur(1px)" data-parallax-speed="2"></i>
    `;
  }
  else if (url.includes('#portfolio'))
    toPage('portfolio')
  else {
    toPage('home')
    middleContent.innerHTML = `<div class="dots dflex dwrap djcsb dposa dparallax" data-parallax-speed="1"
          style="width: 120px; left: 10vw; top: 2vh;">
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
          <dot class="d-inline-block rounded-circle bg1 mb-2" style="width: 30px; height: 30px;"></dot>
        </div>
        <div class="circle rounded-circle bg02 dposa dparallax dfblur10"
          style="height: max(300px, 50vw); width: max(300px, 50vw); left: -5vw; bottom: -200px;" data-parallax-speed="0.5">
        </div>
        <div class="circle rounded-circle bg02 dposa dparallax dfblur10" data-parallax-speed="0.3"
          style="height: 50vw; width: 50vw; right: -25vw; bottom: 5vh;">
        </div>`;

  }
}

function toPage(pageId) {
  // window.location.href = window.location.href.split('#')[0] + "#" + pageId;
  PAGES.forEach((page) => {
    page.classList.remove('show');
    page.classList.add('d-none');
  });
  DOM.remState(pageId, 'd-none');
  setTimeout(() => {

    DOM.addState(pageId, 'show');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, 300);
}
window.addEventListener('locationchange', function () {
  console.log('location changed!');
});
window.addEventListener('hashchange', () => {
  checkUrl(true);
})
checkUrl();