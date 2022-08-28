const Item = require('../model/Item')

const createItem = async (req,res) =>{
    if (await Item.findOne({id: req.body.id })!==null){
        res.status(400).send({Error : "Item Already Exists"})
    }
    else{
        let item = new Item({
            id :req.body.id,
            itemName: req.body.itemName,
            category: req.body.category,
            rarity:req.body.rarity,
            price: req.body.price,
            isAvailable: req.body.isAvailable
        })
    
        await item.save((err, cli) => {
            err && res.status(500).json(err.message)
            res.status(200).send(cli)
        })
    }   
}

const getItems = (req,res) => {
    Item.find((err,items) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(items)
    })
}
const getItemById = (req,res) =>{
    try{
        Item.findOne({id: req.params.id }, (err,item) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(item)
        })
    }catch(error){
        res.status(404).send({Error : "Item not found"})
    }

}


const updateItem = async (req,res) =>{
    try{
        const item = await item.findOne({id : req.params.id})
        if(req.body.id){
            item.id = req.body.id;
        }
        if(req.body.email){
            item.email = req.body.email
        }
        if(req.body.itemName){
            item.itemName = req.body.itemName
        }
        if(req.body.category){
            item.category = req.body.category
        }
        if(req.body.rarity){
            item.rarity = req.body.rarity
        }
        if(req.body.price){
            item.price = req.body.price
        }
        if(req.body.isAvailable){
            item.isAvailable = req.body.isAvailable
        }
        await item.save()
		res.send(item)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "Item not found"})
        }   
    }

const deleteItem = (req,res) => {
    Item.findOneAndDelete({id: req.params.id},(err, cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}

module.exports = {createItem, getItems, getItemById, updateItem,deleteItem}