Java.perform(function() {
    var WebViewClient = Java.use("android.webkit.WebViewClient");
    var CookieManager = Java.use("android.webkit.CookieManager");
    
    WebViewClient.onReceivedHttpAuthRequest.implementation = function(view, handler, host, realm) {
        console.log("[+] WebView Auth: " + host + " realm: " + realm);
        return this.onReceivedHttpAuthRequest(view, handler, host, realm);
    };
    
    // Dump cookies
    CookieManager.getInstance().getCookie.overload('java.lang.String').implementation = function(url) {
        var cookies = this.getCookie(url);
        console.log("[+] Cookies WebView: " + url + " -> " + cookies);
        return cookies;
    };
});
