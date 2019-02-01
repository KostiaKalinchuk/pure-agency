@@include('partials/jquery-3.3.1.min.js');
@@include('partials/slick.js');
@@include('partials/main.js');



document.getElementById('declaration').onclick = function() {
    document.getElementsByClassName('left-menu')[0].style.display = 'none';
    document.getElementsByClassName('wrapper-menu')[0].style.display = 'flex';
};

document.getElementsByClassName('arrow')[0].onclick = function() {
    document.getElementsByClassName('left-menu')[0].style.display = 'flex';
    document.getElementsByClassName('wrapper-menu')[0].style.display = 'none';
};