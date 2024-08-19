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

function toggleEdit(button) {
    var card = button.closest('.card');
    var title = card.querySelector('.title');
    var description = card.querySelector('.description');
    var requirements = card.querySelector('.requirements');
    var editedText = card.querySelector('.edited');

    if (title.contentEditable === "false") {
        title.contentEditable = "true";
        description.contentEditable = "true";
        requirements.contentEditable = "true";
        button.textContent = "Save";
        button.classList.add("save-button");
    } else {
        title.contentEditable = "false";
        description.contentEditable = "false";
        requirements.contentEditable = "false";
        button.textContent = "Edit";
        button.classList.remove("save-button");

        // Set the "Edited" text
        editedText.textContent = "Edited";
    }
}

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

