(() => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  const gtmId = 'GTM-K9KKVKV7';
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(gtmScript, firstScript);
})();
