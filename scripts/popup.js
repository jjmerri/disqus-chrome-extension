document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var parser = document.createElement("a");
    parser.href = tabs[0].url;

    window.disqus_extension__currentUrl =
      `http://${parser.hostname}/${parser.pathname}`.replace(/\/+$/g, "");

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
