Java.perform(function() {
    var X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
    var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
    
    // Hook TrustManager
    TrustManagerImpl.verifyChain.implementation = function(untrustedChain, trustAnchorChain, host, clientAuth, ocspData, tlsSctData) {
        console.log("[+] SSL Pinning bypass - Host: " + host);
        return untrustedChain;
    };
    
    // Hook OkHttp
    try {
        var CertificatePinner = Java.use('okhttp3.CertificatePinner');
        CertificatePinner.check.overload('java.lang.String', 'java.util.List').implementation = function(hostname, certs) {
            console.log("[+] OkHttp CertificatePinner bypass");
            return;
        };
    } catch(e) {}
    
    console.log("[*] SSL Pinning bypass activo");
});
