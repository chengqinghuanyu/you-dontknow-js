/*你不知道的js原文摘抄*/
var LoginController = {
    errors: [],
    getUser: function() {
        return document.getElementById(
            "login_username"
        ).value;
    },
    getPassword: function() {
        return document.getElementById("login_password").value;
    },
    validateEntry: function(user, pw) {
        user = user || this.getUser();
        pw = pw || this.getPassword();
        if (!(user && pw)) {
            return this.failure(
                "Please enter a username & password!"
            );
        } else if (user.length < 5) {
            return this.failure(
                "Password must be 5+ characters!"
            );
        }
        // 如果执行到这里说明通过验证
        return true;
    },
    showDialog: function(title, msg) { // 给用户显示标题和消息
    },
    failure: function(err) {
        this.errors.push(err);
        this.showDialog("Error", "Login invalid: " + err);
    }
};
// 让 AuthController 委托 LoginController
var AuthController = Object.create(LoginController);
AuthController.errors = [];
AuthController.checkAuth = function() {
    var user = this.getUser();
    var pw = this.getPassword();
    if (this.validateEntry(user, pw)) {
        this.server("/check-auth", {
                user: user,
                pw: pw
            })
            .then(this.accepted.bind(this))
            .fail(this.rejected.bind(this));
    }
};
AuthController.server = function(url, data) {
    return $.ajax({
        url: url,
        data: data
    });
};
AuthController.accepted = function() {
    this.showDialog("Success", "Authenticated!")
};
AuthController.rejected = function(err) {
    this.failure("Auth Failed: " + err);
};