const bloco = document.getElementById('bloco-notas');

window.onload = function() {
    const textoSalvo = localStorage.getItem('nota_usuario');
    if (textoSalvo) {
        bloco.value = textoSalvo;
    }
};

bloco.addEventListener('input', () => {
    localStorage.setItem('nota_usuario', bloco.value);
});
