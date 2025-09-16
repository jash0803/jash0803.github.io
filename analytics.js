(function () {
  var MEASUREMENT_ID = 'G-TH9PDF3YVX'; // Replace with your GA4 Measurement ID
  if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-TH9PDF3YVX') {
    return;
  }
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();


