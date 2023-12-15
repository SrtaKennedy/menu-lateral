let menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo') // selectlink está removendo a classe 'ativo' de um item que não foi clicado
    )
    this.classList.add('ativo'); // e está adicionando em um item que eu/você clicou
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

// aqui é a onde o menu vai expandir 

let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('#sidebar');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
})
