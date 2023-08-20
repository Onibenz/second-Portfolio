document.querySelector(".fa-bars")
        .addEventListener('click', navBar);

function navBar() {
    document.querySelector('.nav-list').style.display = 'block';
    document.querySelector('.fa-bars').style.display = 'none';
    document.querySelector('.fa-x').style.display = 'block'
}

document.querySelector(".fa-x")
        .addEventListener('click', exitBar);

function exitBar() {
    document.querySelector('.nav-list').style.display = 'none';
    document.querySelector('.fa-bars').style.display = 'block';
}