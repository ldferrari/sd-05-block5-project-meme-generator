let memeImageContainer = document.getElementById('meme-image-container');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let memeInsert = document.getElementById('meme-insert');
let memeImage = document.getElementById('meme-image');

// adicionar imagem.
memeInsert.addEventListener('change',function(){
    memeImage.src = window.URL.createObjectURL(memeInsert.files[0])  
});

// adicionando texto sobre a foto.
textInput.addEventListener('keyup', function(){
    memeText.innerHTML = textInput.value.replace(/\n/g, '<br>');
});

