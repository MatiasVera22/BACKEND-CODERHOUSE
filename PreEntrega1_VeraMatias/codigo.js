class ProductManager{
    constructor(){
        this.products = []
    }
    getProducts = ()=>{
        return  this.products
    }
   addProduct= (title,price,description,thumbnail,code,stock)=>{
        const product = {
            title:title,
            price:price,
            description: description,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
            
        }
        if(this.products.length===0){
            product.id=1;
        }else{
            product.id=this.products[this.products.length-1].id+1;
        }
        this.products.push(product)
    }
    getProductById = (id)=>{
       let arr = this.products
       let productFiltered= arr.find( prod => prod.id === id)
       if(productFiltered){
        console.log(productFiltered)
       }else if
       (productFiltered === undefined){
        console.log("product not found")
       }

    }

}
     function generarRandom(num) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let result = "";
          for (let i = 0; i < num; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
      
        return result;
      }
const productoNuevo = new ProductManager()
productoNuevo.addProduct('Mate stanley', 20000,'El mejor mate del mercado','#',generarRandom(30),20)
productoNuevo.addProduct('Termo Stanley',45000,'Termo de alta calidad','#',generarRandom(30),50)
productoNuevo.addProduct('Botines Nike',30000,'Livianos como pluma','#',generarRandom(20),30)
productoNuevo.addProduct('Samsung galaxy s20',150000,'Calidad premium a precio accesible','#',generarRandom(60),80)

productoNuevo.getProductById(8)

