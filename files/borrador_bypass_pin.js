Java.perform(function() {
    var SharedPrefs = Java.use("android.content.SharedPreferences$Editor");
    SharedPrefs.putString.overload('java.lang.String', 'java.lang.String').implementation = function(key, value) {
        if (key.includes("PIN")) {
            console.log("[+] PIN original: " + value);
            value = "1234";  // Cambiar PIN por 1234
            console.log("[+] PIN modificado: " + value);
        }
        return this.putString(key, value);
    };
    
    console.log("[*] SharedPreferences PIN hook activo");
});
