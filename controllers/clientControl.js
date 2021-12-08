const Client = require ('../db/SchemaClient')

async function addClient (req, res){
    try {
        const {
            name,
            number,
            direction, 
        } = req.body

        const client = Client ({
            name,
            number,
            direction
        }) 

        if (req.file){
            const {filename} = req.file
            client.setImgUrl(filename)
        }

        const clientStored = await client.save()
        res.status(201).send({clientStored})

    } catch (e) {
        res.status(500).send({message: e.message})
    }

}

async function getClient (req, res){    
    const clients = await Client.find().lean().exec()
    res.status(200).send({ clients })
}

async function deleteClient( req, res ) {
    const id = req.body.id
    try{
    const result = await Client.findByIdAndDelete({_id: `${id}`})
    
    if (result) {
        res.json({
            estado: true,
            message: 'eliminado'
        })
    }else {
        res.json({
            estado: false,
            message: 'Fallo eliminar'
        })
    }
    } catch (error) {
        console.log(error);
    }
} 

async function updateClient(req, res) {
    id = req.body.id
    const {name , number, direction} = req.params
    const result = await Client.findByIdAndUpdate (id, {name, number, direction})
    res.redirect('/client')
}


module.exports = {
    addClient,
    getClient,
    deleteClient
}