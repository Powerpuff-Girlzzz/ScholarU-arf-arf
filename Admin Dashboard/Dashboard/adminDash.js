document.addEventListener('DOMContentLoaded', (event) => {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".theme-toggler");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-btn-popup");
    const overlay = document.getElementById("overlay");
    const requirementsPopup = document.getElementById("requirements-popup");
    const requirementsLink = document.querySelector('.sub-requirements');
    const backArrow = document.getElementById("back-arrow");
    const mainContent = document.getElementById("main-content");

    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });

    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    });

    applications.forEach(application => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${application.applicantName}</td>
            <td>${application.studentNumber}</td>
            <td>${application.scholarshipApplied}</td>
             <td class="${application.status ===
                'Rejected' ? 'danger' : application.
                    status === 'Pending' ? 'warning'
                : 'success'} "> ${application.status} </td>

            <td class="primary"><a href="#" class="details-link">Details</a></td>`;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });

    document.querySelector('.profile-photo img').addEventListener('click', () => {
        document.getElementById("subMenu").classList.toggle("open-menu");
    });

    const detailsLinks = document.querySelectorAll('.details-link');
    if (detailsLinks.length > 0) {
        detailsLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (popup && overlay) {
                    popup.classList.add('active');
                    overlay.classList.add('active');
                }
            });
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            if (popup && overlay) {
                popup.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (popup && overlay) {
                popup.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    requirementsLink.addEventListener('click', (e) => {
        e.preventDefault();
        requirementsPopup.classList.toggle('show');
        if (requirementsPopup.classList.contains('show')) {
            mainContent.style.display = 'none';
        } else {
            mainContent.style.display = 'block';
        }
    });

    backArrow.addEventListener('click', (e) => {
        e.preventDefault();
        requirementsPopup.classList.remove('show');
        mainContent.style.display = 'block';
    });
});
