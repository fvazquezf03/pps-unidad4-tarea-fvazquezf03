Java.perform(function() {
    var FirebaseAuth = Java.use("com.google.firebase.auth.FirebaseAuth");
    
    FirebaseAuth.getInstance().getCurrentUser().implementation = function() {
        var user = this.getCurrentUser();
        if (user) {
            console.log("[+] Firebase User: " + user.getUid());
            console.log("[+] Firebase Token leak posible");
        }
        return user;
    };
});
