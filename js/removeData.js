var expired = new Date(today.getTime() - 24 * 3600 * 1000); // less 24 hours

function deleteCookie(name) {
    document.cookie = name + "=null; path=/; expires=" + expired.toGMTString();
}

function clearCookies() {
    deleteCookie("field1");
    deleteCookie("field2");
    deleteCookie("field3");
    deleteCookie("field4");
    alert('Your cookies have been deleted!');
}