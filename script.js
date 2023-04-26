$(function () {
  $(".deeplink").click(function (e) {
    e.preventDefault();
    // Detect device
    var devType = getMobileOperatingSystem();

    var android_apk_url = $(this).attr("android-apk");
    var apk_url = $(this).attr("apk");
    var siteUrl = $(this).attr("href");

    // alert(url)
    switch (devType) {
      case "android":
        $("#app-frame").attr("src", android_apk_url);
        $("#app-frame").ready(function () {
          return;
        });
        // setTimeout(function () {
        //   window.location = siteUrl;
        // }, 700);
        break;
      default:
        $("#app-frame").attr("src", apk_url);
        $("#app-frame").ready(function () {
          console.log("1");
          return;
        });
      // setTimeout(function () {
      //   window.location = siteUrl;
      // }, 700);
      // break;
    }
  });
});
var getMobileOperatingSystem = function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/android/i.test(userAgent)) {
    return "android";
  }

  // iOS detection from: https://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "desktop";
};
