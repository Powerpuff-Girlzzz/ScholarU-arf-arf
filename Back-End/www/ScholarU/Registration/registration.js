const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const submitBtn = document.querySelector('.btn-submit');
const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
let active = 1;

nextBtn.addEventListener('click', () => {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
});

prevBtn.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
});

const updateProgress = () => {
    steps.forEach((step, i) => {
        if (i === (active - 1)) {
            step.classList.add('active');
            formSteps[i].classList.add('active');
        } else {
            step.classList.remove('active');
            formSteps[i].classList.remove('active');
        }
    });

    if (active === 1) {
        prevBtn.disabled = true;
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    } else if (active === steps.length) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        prevBtn.disabled = false;
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Initial call to set the correct state on page load
updateProgress();


// File upload and OCR
const fileInput = document.getElementById('cor');
const preview = document.getElementById('preview');
const ocrResult = document.getElementById('ocr-result');

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileType = file.type;
        if (fileType === 'application/pdf') {
            preview.innerHTML = '';
            await processPDF(file);
        } else if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                preview.innerHTML = '';
                preview.appendChild(img);
                performOCR(img);
            }
            reader.readAsDataURL(file);
        }
    }
});

const processPDF = async (file) => {
    const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(file));
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport: viewport }).promise;
        preview.appendChild(canvas);
        await performOCR(canvas);
    }
};

const performOCR = async (canvas) => {
    ocrResult.innerHTML = 'Processing OCR...';
    try {
        const { Tesseract } = window;
        const result = await Tesseract.recognize(canvas, 'eng', {
            logger: (m) => console.log(m),
        });
        ocrResult.innerHTML += result.data.text + '<br>';
    } catch (error) {
        ocrResult.innerHTML = 'Error processing OCR: ' + error.message;
    }
};