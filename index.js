
const express = require('express')
const app = express()
 const multer = require('multer')
 const path = require('path')

app.set('view engine', 'ejs')

const storage = multer.diskStorage({  
    
    destination: function (req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname) );
    }   
 
})

const upload = multer({
    storage: storage,

    fileFilter: function(req, file, cb){

        console.log(" entrei na funcção filter")       
        
        if(file.mimetype !== 'image/png' &&  file.mimetype !== 'image/jpg' &&  file.mimetype !== 'image/gif' &&  file.mimetype !== 'image/jpeg') {
            console.log('arquivo não permitido')
            return cb(new Error('Only images are allowed'))
        }else{
            console.log('arquivo passou')
            cb(null, true) 
        }       
    
    }
}).single('file')


app.get('/', (req, res)=>{
    res.render('index')
})

    app.post("/upload", (req, res)=>{  // usar upload.array para trabalhar com múltiplos arquivos, indicando a quantidade máxima de arquivos
        upload(req,res, function(err){
            if(err instanceof multer.MulterError){
                // A Multer error occurred when uploading
                res.send(err)
            }else if(err){
                // An unknow error occurred when uploading
                res.send(err)
            }else{
                 // Everithing went fine
               console.log(req.file)
               res.send(' Arquivo enviado com sucesso!')

            }
           
        })    
})


app.listen(3333,()=>{
    console.log('servidor rodando')
})