document.addEventListener('keypress', tratatecla);
const btPesquisar = document.querySelector('#btPesquisar');
let data = new Date();

btPesquisar.addEventListener('click', consultaAPOD);

// Funçao para o botão funcionar com enter
function tratatecla(e) {
    if (!e.repeat) {
        if (e.key == 'Enter') {
            consultaAPOD()
        }
    }
}

// Funão da API
async function consultaAPOD() {
    const data = document.querySelector('#txData').value;
    const explicacao = document.querySelector('#explicacao');

    const url = `https://api.nasa.gov/planetary/apod?api_key=ygrCXyO6UtqmWGq6y3ORdd8MmyfIfGIXEvyk4NcV&date=${data}`;
    console.log(url);

    const resp = await fetch(url);
    const dados = await resp.json();

    console.log(dados);

    const imgAPOD = document.querySelector('#apod');
    imgAPOD.src = dados.url;

    // essa linha de comando mostra a explicação da imagem que foi apresentada
    explicacao.innerHTML = `Explicação da imagem mostrada: ${dados.explanation}`

}


