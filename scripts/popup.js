document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    // this url is used a string identifier for the disqus conversation
    // only works with http and https protocol so strip whatever the protocol is and hardcode http
    const disqus_extension__currentUrl = tabs[0].url.replace(
      /(^\w+:|^)\/\//,
      ""
    );

    window.disqus_extension__currentUrl = `http://${disqus_extension__currentUrl}`;

    let dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = true;
    dsq.src = "./scripts/disqus.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(dsq);
  });
});
