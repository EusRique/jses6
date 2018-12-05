import api from './api';

class App {
    //this pq estamos referenciando a mesma classe
    constructor() {
        this.repositories = [];

        //Escuta o click do button do form para adicionar
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    // Vai registrar os eventos, click form, 
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event); //arrow functions
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);

        } else {
            document.getElementById('loading').remove();
        }
    }

    // Add o repositório que será buscado no input
    async addRepository(event) {
        //Não permite que carregue a pagina após envio do formulário
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;
        
        this.setLoading();
        
        try{
            const response = await api.get(`/repos/${repoInput}`); //async await
            
            const {name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })

            this.inputEl.value = '';

            this.render();
        } catch(err) {
            alert('O repositório não existe');
        }

        this.setLoading(false);
    }

    //Vai pagar todo conteudo percorrendo array e montar do zero
    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

//Não precisa armazena em nenhua variavel pois não iremos utilzar retorno das mesmas
new App();