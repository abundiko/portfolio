const PAGES = document.querySelectorAll('.page');
const POSTS = document.querySelectorAll('.portfolio-card');
const homePage = PAGES[0];
const aboutPage = PAGES[1];
const middleContent = document.getElementById('middle-content');
const progressBars = document.querySelectorAll('.app-progress-bar');
let bgImgPath = '';
let postWasClicked = false;


window.onscroll = e => {

  const offset = window.scrollY;
  performParallax(offset);
  if (offset > 10) {
    DOM.addState('header', 'scrolled');
  } else {
    DOM.remState('header', 'scrolled');

  }
  progressBars.forEach(bar => {
    if (elementInView(bar)) {
      bar.classList.add('scrolled');
    } else bar.classList.remove('scrolled');
  });
  if (elementInView(homePage)) {

    homePage.style.backgroundColor = `rgba(0,0,0,${offset / 400})`;
  } else if (elementOutofView(homePage)) {
    homePage.style = "";
  }
  if (elementInView(aboutPage) && offset <= 300) {

    aboutPage.style.backgroundColor = `rgba(0,0,0,${offset / 400})`;
  } else if (elementOutofView(aboutPage)) {
    aboutPage.style = "";
  }
}
const links = document.querySelectorAll('header nav a');
links.forEach((link) => {
  link.onclick = e => {
    DOM.remState('nav-container', 'open');
    DOM.remState('body', 'doverh');
  }
});

function checkUrl(animate) {
  const url = window.location.href;
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
  if (!postWasClicked) {
    setBgImg('assets/img/gradient.jpeg');
  }
  postWasClicked = false;
  middleContent.innerHTML = '';
  if (url.includes('#contact'))
    toPage('contact')
  else if (url.includes('#post')) {

    toPage('post')
  }
  else if (url.includes('#about')) {
    toPage('about')
    middleContent.innerHTML = `
      <i class="fas fa-code t1 fs-1 dposa dopa5 dparallax" style="top:30px; left:30px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-java" style="top:30px; left:100px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <i class="fab fa-android t1 fs-1 dposa dopa5 dparallax" style="top:30px; left:170px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-apple" style="top:100px; left:30px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-css3" style="top:100px; left:100px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <i class="fab t1 fs-1 dposa dopa5 dparallax fa-js-square" style="top:170px; left:30px; filter:blur(1px)" data-parallax-speed="-0.2"></i>
      <div class="circle rounded-circle bg02 dposa dparallax dfblur10" data-parallax-speed="0.8"
          style="height: max(400px, 50vw); width: max(400px, 50vw); right: -25vw; top: -5vh;">
        </div>
        <div class="circle rounded-circle bg03 dposa dparallax dfblur30" data-parallax-speed="0.5"
          style="height: max(400px, 50vw); width: max(400px, 50vw); right: -5vw; bottom: -15vh;">
        </div>
    `;
  }
  else if (url.includes('#portfolio'))
    toPage('portfolio')
  else {
    toPage('home')
    middleContent.innerHTML = `<div class="dots dflex dwrap djcsb dposa dparallax" data-parallax-speed="0.8"
          style="width: 120px; left: 10vw; top: 10vh;">
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
          style="height: max(400px,50vw); width: max(400px,50vw); right: -25vw; bottom: 5vh;">
        </div>`;

  }
}

function toPage(pageId) {
  PAGES.forEach((page) => {
    page.classList.remove('show');
    page.classList.add('d-none');
  });
  DOM.remState(pageId, 'd-none');
  setTimeout(() => {

    DOM.addState(pageId, 'show');
  }, 1500);
}

window.addEventListener('hashchange', () => {
  const url = window.location.href;
  checkUrl(true);
  if (url.includes('contact')) document.querySelector('#header>a').classList.add('dvh');
  else document.querySelector('#header>a').classList.remove('dvh');
})


POSTS.forEach(postCard => {
  const postId = postCard.id;
  const postLink = postCard.querySelector('a');
  const postTitle = postCard.querySelector('h5').innerText;
  bgImgPath = postCard.querySelector('img').src
  postLink.onclick = e => {
    postWasClicked = true;
    document.getElementById('post-images-slider').scrollLeft - 1000;
    console.log(document.getElementById('post-images-slider'))
    setBgImg();
  }
});

function fetchPost(params) {
  const postId = window.location.hash.split('post')[1];
}



function setBgImg(path) {
  document.getElementById('back-img').src = path ||= bgImgPath;
}





checkUrl();
window.scrollTo(0, window.scrollY + 2);