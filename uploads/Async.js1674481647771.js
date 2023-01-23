


async function pegarId() {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var idEncontrado = false

            if(idEncontrado){
                resolve(1)
            }else{
                reject(0)
            }
        },3000)
    }) 
    
}


 async function buscarEmailNoBanco(id){   
        var idEmail;
        if (id != 0){
            idEmail = true;
        }else{
            idEmail = false;
        }

        return new Promise((resolve, reject)=>{
            //lógica aq
        
            if(idEmail){
                resolve(1)
            }else{
                reject(0)
            }
         })   
    }    
 


 async function principal(para, corpo){
        console.log('antes do await')
        var id = await pegarId().catch(id =>{
            return id
        })
        console.log('depois do await')

        //if(id != 0){
        var email = await buscarEmailNoBanco(id).catch(id =>{
            return id
        })
        //} 

        setTimeout(()=>{           

            if(email == 1){
            console.log(para, corpo)
            
            }else{
                console.log('não foi possível enviar o email') 
            }
            
        },4000)
    
 }
 console.log('inicio do envio ----------')
 
//principal("paulo", ' essa é minha mensagem de email')

console.log('fim do envio ----------')

console.log(javascript.version);


 

 

