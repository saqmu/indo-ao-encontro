const bloco = document.getElementById('bloco-notas');

// Carregar nota ao abrir
window.onload = () => {
    bloco.value = localStorage.getItem('viagem_nota') || "";
};

// Salvar enquanto digita
bloco.addEventListener('input', () => {
    localStorage.setItem('viagem_nota', bloco.value);
});

// Futura função de mudar biomas (estaremos desenvolvendo na próxima etapa)
function mudarBioma() {
    alert("Próxima estação: Outono! (Aguarde a atualização das árvores)");
}

function mudarClima() {
    alert("Iniciando chuva...");
}

function alternarDiaNoite() {
    document.body.classList.toggle('noite');
    alert("O sol está se pondo...");
}
