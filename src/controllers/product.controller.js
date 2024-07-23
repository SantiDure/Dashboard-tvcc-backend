export function getProducts(req,res){
    try {
        res.status(200).json({payload:"getProducts"})
    } catch (error) {
        res.status(404).json({error:error})
    }
}

export function getProductsForId(req,res){
    const {pid} = req.params
    try {
        res.status(200).json({id: pid})
    } catch (error) {
        res.status(404).json({error:error})
    }
}