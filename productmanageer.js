class productManager {
    constructor () {
        this.products = []
        }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || price === 0 || !thumbnail || !code) { 
            console.log(`Check ${code} parameters: all parameters are mandatory, only stock can be 0`);
            return false;
          } else {
            const checkproduct = this.#checkCode(code) 
            if (checkproduct==='OK') {
                const product = {
                    code: code,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    stock: stock,
                    id: this.#getMaxID() + 1, 
                }
                this.products.push(product)
                console.log(`Product ${code} created`)
                return `Product ${code} created`
            } else {
                console.log(`The product ${code} already exists`)
                return `The product ${code} already exists`}
        }
    } 

    getProductById = (productId) => {
        const product = this.products.find(product => product.id === productId)
        if (product) {
            console.log(product)
            return product
        } else {
            console.log(`The product id ${productId} does not exists`)
            return `The product id ${productId} does not exists`
        }
    }

    getProducts=()=>{
        console.log(this.products)
        return this.products
    }

    #getMaxID = () => { 
        const ids = this.products.map(product => product.id)
        if (ids.includes(1)) {
            return Math.max(...ids)
        } else {
            return 0}
    }

    #checkCode=(codeProduct)=>{ 
        if (!this.products.find(product => product.code === codeProduct)) {
            const estado = 'OK'
            return estado
        } else {
            const estado = 'Error'
            return estado
        }
    }
}


const manager = new productManager()


manager.addProduct('Queque redvelvet','Queque de redvelvet',10000,'Sin imagen','PT001',0) // stock en 0 OK
manager.addProduct('Queque vainilla','Queque de vainilla decorado',15000,'Sin imagen','PT001',5) // Error: codigo existente
manager.addProduct('Queque chocolate','Queque de chocolate decorado',15000,'Sin imagen','PT002',10)
manager.addProduct('Queque zanahoria','Queque de zanahoria',6000,'Sin imagen','PT003',10)
manager.addProduct('Queque banano','Queque de banano',6000,'Sin imagen','PT004',10)
manager.addProduct('Queque naranja','Queque de naranja',5000,'Sin imagen','PT005',10)
manager.addProduct('Queque avena','',5000,'Sin imagen','PT006',10) // Error: precio 0
manager.getProducts()
manager.getProductById(3)
manager.getProductById(7) // Error: no existe el ID
