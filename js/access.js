function ipCheck() {
$.get("http://ipinfo.io", function(response) {
var usrIp = response.ip;
}, "jsonp");
var banned = JSON.parse(banned);
var whitelist = JSON.parse(whitelist);
var b = 0;
while(banned[b] != null) {
if (usrIp == banned[b].ip) {
window.location = "/403.html";
}
b = b + 1;
}
var w = 0;
while (whitelist[w].ip != null && allowed != true) {
if (whitelist[w].ip == usrIp) {
var allowed = true;
}
w = w + 1;
}
if (allowed != true) {
window.location = "/403.html";
}
}
function passwd() {
var password = JSON.parse(pass);
var enterpass = window.prompt("What is the password for this link?");
if (enterpass != password) {
window.location = "/403.html";
}
}