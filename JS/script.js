let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')


inputNovaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let tarefa = {
          nome: inputNovaTarefa.value,
          id: gerarId(),
        }
        // Adicionar a tarefa ao HTML
        adicionarTarefa(tarefa);
    }
});

btnAddTarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
      }
        // Adicionar a tarefa ao HTML
        adicionarTarefa(tarefa);
})

function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {

    let li = criarTagLi(tarefa)
    listaTarefas.appendChild(li)

    inputNovaTarefa.value = ''
}



function criarTagLi(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnCheck = document.createElement('button');
    btnCheck.classList.add('btnAcao');
    btnCheck.id = 'checkColor'
    btnCheck.innerHTML = '<i class="fa fa-check"></i>';
    btnCheck.setAttribute('onclick', 'check('+tarefa.id+')')
    
    


    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.id = 'trashColor'
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')


     div.appendChild(btnCheck);
     div.appendChild(btnExcluir);
     
     li.appendChild(span);
     li.appendChild(div);

     return li
}

function check(idTarefa) {

    let concluido = document.getElementById(idTarefa)

    concluido.style.color = 'green'
    
}

function excluir(idTarefa) {
    let confirmação = window.confirm('Tem certeza que deseja excluir a tarefa?');
    if (confirmação) {
        let li = document.getElementById(idTarefa);
        if (li) {
            listaTarefas.removeChild(li)
        }
    }
 
}