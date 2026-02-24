//* Tratando e Lançando erros (Try, catch, finally)

try {
    //Executado quando não há erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
} catch (error) {
    //Executado quando há erros
    console.log('Tratando o erro')
} finally {
    //Sempre executado
    console.log('Finally sendo executado')
}

