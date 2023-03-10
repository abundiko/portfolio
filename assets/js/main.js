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
  else if (url.includes('#about'))
    toPage('about')
  else if (url.includes('#portfolio'))
    toPage('portfolio')
  else {
    toPage('home')
    middleContent.innerHTML = `<div class="dots dflex dwrap djcsb dposa dparallax" data-parallax-speed="3"
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
        <div class="circle rounded-circle bg02 dposa dparallax"
          style="height: 100px; width: 100px; right: 5vw; bottom: 15vh;" data-parallax-speed="1">
        </div>
        <div class="circle rounded-circle bg02 dposa dparallax" data-parallax-speed="0.5"
          style="height: 150px; width: 150px; right: -70px; bottom: 5vh;">
        </div>`;

  }
}

function toPage(pageId) {
  // window.location.href = window.location.href.split('#')[0] + "#" + pageId;
  PAGES.forEach((page) => {
    page.classList.remove('show');
  });
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