function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + decodeURIComponent(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}



function userData() {
    const age = setCookie("age", form.age.value);
    const gender = setCookie("gender", form.gender.value);
    const sex = setCookie("sex", form.sex.value);
    return true;
}
module.exports = userData;