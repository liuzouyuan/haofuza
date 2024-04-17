var isSmallScreen = window.matchMedia('(max-width: 930px)').matches;

if (isSmallScreen) {
  document.getElementById('navbar').style.display = 'none';
} else {
  document.getElementById('navbar').style.display = 'block';
}

document.getElementById('toggleNav').addEventListener('click', function () {
  var navbar = document.getElementById('navbar');
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    navbar.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
});

window.addEventListener('resize', function () {
  isSmallScreen = window.matchMedia('(max-width: 930px)').matches;
  if (isSmallScreen) {
    document.getElementById('navbar').style.display = 'none';
  } else {
    document.getElementById('navbar').style.display = 'block';
  }
});
