const mainDrag = document.querySelector('.main-drag');

const handleDragOver = (event) => {
    event.preventDefault();
    mainDrag.style.border = '1px solid #ccc';
    mainDrag.querySelector('h3').innerText = 'Drop Here';
}

const handleDragLeave = (event) => {
    mainDrag.style.border = '1px dashed #ccc';
    mainDrag.querySelector('h3').innerText = 'Drag and Drop File Upload';   
}

const handleDrop = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();

    fileReader.onload = (response) => {
        const result = response.target.result;
        mainDrag.querySelector('img').setAttribute('src', result);
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('src', result);
        anchorTag.setAttribute('download', 'file_name');
        mainDrag.innerHTML += anchorTag;
        anchorTag.click();
    }

    fileReader.readAsDataURL(event.dataTransfer.files[0]);
}

mainDrag.addEventListener('dragover', handleDragOver);
mainDrag.addEventListener('dragleave', handleDragLeave);
mainDrag.addEventListener('drop', handleDrop);    