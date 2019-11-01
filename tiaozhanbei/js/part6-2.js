/*弹窗事件js*/
var btn = document.getElementById('open_btn');
var di = document.getElementById('background-62');
var ss=document.getElementById('show-content-part-1-2');
btn.onclick = function show() {
    di.style.display = "block";
    ss.style.display = "none";
}

di.onclick = function close() {
    di.style.display = "none";
    ss.style.display = "block";
}

window.onclick = function close(e) {
    if (e.target == di) {
        di.style.display = "none";
        ss.style.display = "block";
    }
}