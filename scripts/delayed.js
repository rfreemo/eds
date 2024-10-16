(() => {
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-59C6YZDTJY';
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line no-undef
  const gtag = (...args) => dataLayer.push(args);
  gtag('js', new Date());

  gtag('config', 'G-59C6YZDTJY');
})();
