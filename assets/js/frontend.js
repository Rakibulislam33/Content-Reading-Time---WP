window.addEventListener('scroll', function () {
  var progressBar = document.querySelector('.crt-progress-bar');
  if (!progressBar) {
    return;
  }

  var totalHeight = document.body.scrollHeight - window.innerHeight;
  var progress = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.width = progress + '%';
});
