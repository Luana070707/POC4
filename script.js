// URL da API de exemplo
const url = 'https://jsonplaceholder.typicode.com/posts';

// Função que utiliza o fetch para buscar dados
async function fetchData() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Limpa o conteúdo anterior

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        dataContainer.innerHTML = `<p>Erro ao buscar dados: ${error.message}</p>`;
    }
}

// Função para exibir os dados na página
function displayData(posts) {
    const dataContainer = document.getElementById('data-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        dataContainer.appendChild(postElement);
    });
}

// Adiciona o evento de clique ao botão
document.getElementById('fetch-button').addEventListener('click', fetchData);
