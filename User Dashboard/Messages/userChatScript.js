const openChat = document.querySelector('.chatlist');
const backBtn = document.querySelector('.back-button');
const rightContainer = document.querySelector('.rightSide');
const leftContainer = document.querySelector('.leftSide');
//const fileUpload = document.getElementById('fileInput');
//const fileNames = document.getElementById('messageInput');

function checkScreenSize() {
    if (window.matchMedia('(min-width: 1201px)').matches) {
        leftContainer.style.display = 'block';
        rightContainer.style.display = 'block';
    } else if (window.matchMedia('(min-width: 993px) and (max-width: 1200px)').matches) {
        leftContainer.style.display = 'block';
        rightContainer.style.display = 'block';
    } else if (window.matchMedia('(min-width: 769px) and (max-width: 992px)').matches) {
        leftContainer.style.display = 'block';
        rightContainer.style.display = 'none';
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        leftContainer.style.display = 'block';
        rightContainer.style.display = 'none';
    }
}

function handleOpenChat() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        leftContainer.style.display = 'none';
        rightContainer.style.display = 'block';
    }
}

function handleBackBtn() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        rightContainer.style.display = 'none';
        leftContainer.style.display = 'block';
    }
}


openChat.addEventListener('click', handleOpenChat);
backBtn.addEventListener('click', handleBackBtn);


checkScreenSize();


window.addEventListener('resize', checkScreenSize);


//For fileUpload
//fileUpload.addEventListener('change', () => {
    //const files = Array.from(fileUpload.files);
    //const fileMsgInput = files.map(file => file.name).join(', ');
   // fileNames.value = fileMsgInput;
//})

