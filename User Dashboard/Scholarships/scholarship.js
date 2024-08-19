const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

let ul = document.querySelector(".ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current_page = 1;
let active_page = "";

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    //themeToggler.querySelector('span').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', (event) => {
    const subMenu = document.getElementById("subMenu");

    function toggleMenu() {
        subMenu.classList.toggle("open-menu");
    }

    document.querySelector('.profile-photo img').addEventListener('click', toggleMenu);

});


create_pages(current_page);

function create_pages(current_page) {
    ul.innerHTML = "";

    let before_page = current_page - 2;
    let after_page = current_page + 2;

    if (current_page == 2) {
        before_page = current_page - 1;
    }

    if (current_page == 1) {
        before_page = current_page;
    }

    for (let i = before_page; i <= after_page; i++) {
        if (current_page == i) {
            active_page = "active_page";
        }
        else {
            active_page = "";
        }
        ul.innerHTML += `<li onclick="create_pages(` + i + `)"><a href="#" class="page_number ` + active_page + `">` + i + `</a></li>`;
    }

    //NEXT AND PREV BUTTON

    prev.onclick = function () {
        current_page--;
        create_pages(current_page);
    }
    if (current_page <= 1) {
        prev.style.display = "none";
    }
    else {
        prev.style.display = "block";
    }

    next.onclick = function () {
        current_page++;
        create_pages(current_page);
    }

}

function toggleForm() {
    const applyForm = document.querySelector('.apply-form');
    const overlay = document.querySelector('.overlay');

    if (applyForm.classList.contains('hide') || applyForm.style.display === '') {
        applyForm.style.display = 'block';
        overlay.style.display = 'block';
        requestAnimationFrame(() => {
            applyForm.classList.remove('hide');
            applyForm.classList.add('show');
            overlay.classList.add('show');
        });
    } else {
        applyForm.classList.remove('show');
        applyForm.classList.add('hide');
        overlay.classList.remove('show');
        applyForm.addEventListener('transitionend', () => {
            if (applyForm.classList.contains('hide')) {
                applyForm.style.display = 'none';
                overlay.style.display = 'none';
            }
        }, { once: true });
    }
}

document.querySelectorAll('.applyBtn').forEach(button => {
    button.addEventListener('click', toggleForm);
});

document.getElementById('arwBack').addEventListener('click', toggleForm);



