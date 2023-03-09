window.onscroll = e => {

  const offset = window.scrollY;
  if (offset > 10) {
    DOM.addState('header', 'scrolled');
  } else {
    DOM.remState('header', 'scrolled');

  }
}
const links = document.querySelectorAll('nav a, footer a');
links.forEach((link) => {
  link.onclick = e => {
    DOM.addState('body', 'dopa2');
    setTimeout(() => {
      DOM.remState('body', 'dopa2');

    }, 200);
    
  }
})