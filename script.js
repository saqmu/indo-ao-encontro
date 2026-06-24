// Seleciona o bloco de notas
const bloco = document.getElementById('bloco-notas');

// Quando o site carregar, ele verifica se tem algo salvo na memória do navegador
window.onload = function() {
    const textoSalvo = localStorage.getItem('nota_usuario');
    if (textoSalvo) {
        bloco.value = textoSalvo;
    }
};

// Toda vez que você digitar qualquer letra, ele salva instantaneamente
bloco.addEventListener('input', () => {
    localStorage.setItem('nota_usuario', bloco.value);
});
