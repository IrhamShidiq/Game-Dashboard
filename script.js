var menu = document.getElementById('menu');
var close = document.getElementById('close');
var sidebar = document.getElementById('sidebar');

menu.addEventListener('click', function () {
    sidebar.style.marginLeft = "0";
});

close.addEventListener('click', function () {
    sidebar.style.marginLeft = "-1000px";
});