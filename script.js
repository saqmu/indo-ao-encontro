// Seleciona o bloco de notas
const bloco = document.getElementById('bloco-notas');

// Quando o site carregar, ele verifica se tem algo salvo na memória
window.onload = function() {
    const textoSalvo = localStorage.getItem('nota_usuario');
    if (textoSalvo) {
        bloco.value = textoSalvo;
    }
};

// Toda vez que você digitar uma letra, ele salva na memória do navegador
bloco.addEventListener('input', () => {
    localStorage.setItem('nota_usuario', bloco.value);
});
