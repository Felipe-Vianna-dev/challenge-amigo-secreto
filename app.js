//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declara a variável para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Pega o valor digitado no campo de input
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return; // Não faz nada se o campo estiver vazio
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos na interface
    atualizarLista();

    // Limpa o campo de input
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre todos os amigos e adiciona um item <li> para cada um
    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes primeiro.");
        return;
    }

    // Sorteia um amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na interface
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}