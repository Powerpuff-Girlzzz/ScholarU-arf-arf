const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

document.addEventListener('DOMContentLoaded', () => {
    const detailsWrapper = document.querySelector('.details-wrapper');
    const overlay = document.getElementById('overlay');
    const toggleDetailsLinks = document.querySelectorAll('.primary'); // Update this selector if needed
    const closeDetailsBtn = document.querySelector('#closeBtn-popup'); // Update this selector if needed

    // Toggle details-wrapper visibility with animation
    toggleDetailsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (detailsWrapper) {
                detailsWrapper.classList.add('active'); // Show details-wrapper
                overlay.classList.add('active');
            }
        });
    });

    if (closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', () => {
            if (detailsWrapper) {
                detailsWrapper.classList.remove('active'); // Hide details-wrapper
                overlay.classList.remove('active');
            }
        });
    }
});


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

applications.forEach(application => {
    const tr = document.createElement('tr');
    const trContent = `
                         <td>${application.title}</td>
                        <td>${application.deadline}</td>
                        <td class="${application.eligibilityStatus ===
            'Eligible' ? 'success' : 'danger'} "> ${application.eligibilityStatus} </td>
                         <td class="primary"><a href="#">Details</a></td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

document.addEventListener('DOMContentLoaded', (event) => {
    const subMenu = document.getElementById("subMenu");

    function toggleMenu() {
        subMenu.classList.toggle("open-menu");
    }

    document.querySelector('.profile-photo img').addEventListener('click', toggleMenu);

});

toggleMenu();

function toggleForm() {
    const applyForm = document.querySelector('.apply-form');
    const overlay = document.querySelector('.overlay');
    const detailsWrap = document.querySelector('.details-wrapper');

    if (applyForm.classList.contains('hide') || applyForm.style.display === '') {
        applyForm.style.display = 'block';
        detailsWrap.display = 'none';

        requestAnimationFrame(() => {
            applyForm.classList.remove('hide');
            applyForm.classList.add('show');
            overlay.classList.add('show');
            detailsWrap.classList.remove('active');
        });
    } else {
        applyForm.classList.remove('show');
        applyForm.classList.add('hide');
        overlay.classList.remove('show');
        detailsWrap.classList.add('active');
        applyForm.addEventListener('transitionend', () => {
            if (applyForm.classList.contains('hide') && detailsWrap.classList.contains('')) {
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

