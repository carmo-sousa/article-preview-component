const share = document.querySelector('.icon-share');
// const social = document.querySelector('.card-social');

share.addEventListener('click', () => {
  let className = social.className.split(' ')
  let active = className.length > 1 ? true : false;

  if (active) {
    // social.classList.remove('active');
    share.classList.remove('active');

  } else {
    // social.classList.add('active');
    share.classList.add('active');

  }
});