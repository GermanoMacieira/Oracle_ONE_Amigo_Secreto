// Lista onde vamos guardar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Pega o valor digitado no input
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // remove espaços extras

    // Verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    // Adiciona o nome no array de amigos
    amigos.push(nome);

    // Atualiza a lista de amigos na tela
    mostrarAmigos();

    // Limpa o campo de input
    input.value = "";
}
