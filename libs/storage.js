const multer = require ('multer');
const fs = require ('fs')
const path = require ('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        var ruta = path.join(__dirname,`../`,`../`,`../`,`/dataClient`,`/${req.body.name}`)
        
        if (fs.existsSync(`${ruta}`)){
            console.log('La carpeta existe');
        }else{
            fs.mkdir(`${ruta}`, function (err) {
                if(err){throw(err)}
            })
        }

        cb(null, `${ruta}` )
        cb(null, `./storage/imgs`)
    },
    filename: function (req, file, cb) {
         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let ext = file.originalname.slice(-3)
        let name = file.originalname.replace( `.${ext}`,'')
        cb(null, `${name}-${uniqueSuffix}.${ext}`)
    }
  })
  
const upload = multer({ storage })
  
module.exports = upload 