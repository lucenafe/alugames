function alterarStatus(id) {
let gameClicado = document.getElementById(`game-${id}`);
let imagem = gameClicado.querySelector('.dashboard__item__img');
let botao = gameClicado.querySelector('.dashboard__item__button');
let textoAlugado = 'Alugado com sucesso!';
let textoDevolvido = 'Devolvido com sucesso!';

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';
        alert(`${textoDevolvido}`);
        console.log(`${textoDevolvido}`);
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        alert(`${textoAlugado}`);
        console.log(`${textoAlugado}`);
    }
}
