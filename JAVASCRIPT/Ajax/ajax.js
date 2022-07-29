// As requisições assíncronas servem para comunicar com apis internas 
// ou de terceiros, através de métodos http sem a necessidade de esperar o retorno
// para fazer um outra e, nesse sentido, temos duas opções o objeto XMLhttpRequest e a API Fetch.
// Vermos abaixo seus exemplos...

// Declarando variáveis globais para o estudo


const image = document.getElementById('see_dogs')
const button = document.querySelector('#mostar')

button.addEventListener('click', function() {
    // API Teste
    let request = new XMLHttpRequest() // Instanciando um novo objeto XMLHttpRequest
    let url = "https://dog.ceo/api/breeds/image/random"

    request.open("GET", url) // Método OPEN abre a conexão, é necessário definir o método
                             // e também a url a ser requisitada. (Estude mais sobre...)
    
    request.onreadystatechange = function() {
        
        if(request.readyState == 3){
            console.log('Aguarde o carregamento...')
        }
        
        
        if(request.readyState == 4){
            let jsonResponse = JSON.parse(request.responseText)

            console.log('requisição finalizada')
            console.log(jsonResponse)

            image.src = jsonResponse.message
        }
    }

    request.send();

})