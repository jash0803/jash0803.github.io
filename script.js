// tiny enhancements: current year + smooth internal link scroll
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // smooth scroll for same-page anchors
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
      var id = target.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '#' + id);
      }
    }
  });
})();


