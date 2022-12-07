const getSidebar = document.getElementById('sidebar');
const getNavUL = document.getElementById('nav-ul')
const getNavBarList = document.querySelector('.navbar-list')




document.addEventListener("click", (event) => {
    if (!getSidebar.contains(event.target)) {
        getNavUL.classList.remove('show')
        getNavBarList.classList.remove('show')    }
    else {
        getNavUL.classList.toggle('show')
        getNavBarList.classList.toggle('show')
    }
});