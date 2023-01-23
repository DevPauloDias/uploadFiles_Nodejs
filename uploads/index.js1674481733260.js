

// O setTimeout executa uma função/ação após um intervalo de tempo informado em milisegundos -- por padrão ele é asyncrono


var timeout = 2000

 function enviarEmail( para, corpo, callback){
    setTimeout(() => {
        console.log(`
        Para: ${para}
        --------------------------------
        ${corpo}
        -------------------------------
        De: Paulo Dias
        `)
        callback();
    }, timeout)
}

enviarEmail("paulodia@gmail", " simulando envio de email com setTimeout", ()=>{
    setTimeout(()=>{
        console.log('Email enviado! ')
    },timeout) 
})
console.log('Enviando email')

