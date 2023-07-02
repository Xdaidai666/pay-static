$(document).ready(function () {
    var cookieExists = $.cookie('token');
    if (!cookieExists) {
        window.location.href = "/admin/login"
    }
});