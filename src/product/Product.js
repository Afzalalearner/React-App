import './Product.css'


const Product =({product})=>{

    const getnewPrice=()=>{
        return product.price-product.price*product.discount/100;
    }
    return <div>
        <h4>{product.brand} {product.model}</h4>
        <br/>
        <img src={product.image} alt="Phone" width={100} height="100"/>
        <br/>
        <b style={{textDecoration:product.discount>0?'line-through':''}}>Was:{product.price }</b>
        <br/>
        <b>Is:{getnewPrice()}</b>
        <br/>
        <button className="button" disabled={!product.inStock}>Buy Now</button>
        <hr/>
    </div>
    
}
export default Product;