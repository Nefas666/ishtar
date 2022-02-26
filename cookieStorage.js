function getCookie(c_name) {
    var c_start = document.cookie.indexOf(c_name + "=");

    if (document.cookie.length > 0) {
        if (c_start !== -1) {
            return getCookieSubstring(c_start, c_name);
        }
    }
    return localStorage.getItem(c_name);
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays === null) ? "" : ";expires=" + exdate.toUTCString());
    // alert("this is document.cookie: " + document.cookie);

    return localStorage.setItem(c_name, value);
}