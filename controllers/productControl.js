const Product = require ('../db/schemaProduct')

async function addProduct (req, res){
    try {
        const {
            name,
            quantity,
            price,
            description 
        } = req.body

        const product = Product ({
            name,
            quantity,
            price,
            description 
        }) 

        if (req.file){
            const {filename} = req.file
            product.setimgUrl(filename)
        }

        const productStored = await product.save()
        res.status(201).send({productStored})

    } catch (e) {
        res.status(500).send({message: e.message})
    }

}

async function getProduct (req, res){    
    const product = await Product.find().lean().exec()
    res.status(200).send({ product })
}

async function deleteProduct( req, res ) {
    const id = req.body.id
    try{
    const result = await Product.findByIdAndDelete({_id: `${id}`})
    
    if (result) {
        res.json({
            estado: true,
            mensaje: 'eliminado'
        })
    }else {
        res.json({
            estado: false,
            mensaje: 'Fallo eliminar'
        })
    }

    } catch (error) {
        console.log(error);
    }
} 

async function updateProduct(req, res) {
    id = req.body.id
    const { name , quantity, price, description} = req.params
    const result = await Product.findByIdAndUpdate (id, {name, quantity, price, description})
    res.redirect('/product')
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct
}