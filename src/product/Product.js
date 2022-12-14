import './Product.css'


const Product =({product})=>{

    const getnewPrice=()=>{
        return product.price-product.price*product.discount/100;
    }
    return <div className="card" style={{width:'18rem'}}>
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.brand} {product.model}</h5>
    <p className="card-text"><b style={{textDecoration:product.discount>0?'line-through':''}}>Was:{product.price }</b>
        <br/>
        <b>Is:{getnewPrice()}</b>
        <br/>
</p>
    <div className='card-footer'>
    <button className="btn btn-primary disabled={!product.inStock}">Add to Cart</button>

    </div>
  </div>
  
  </div>
   
    
    
    
    
    
    
}
export default Product;