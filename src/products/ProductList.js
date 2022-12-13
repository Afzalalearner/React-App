import React from "react";

const ProductList=()=>{

    const data=[
        {id:1,brand:'Apple',model:'Iphone 13',price:800,discount:10,inStock:true,image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRh8tJBE2L23ZGTZynnDqHM3xeLZeL_q2sxZFvOoyMkeQpEcoPxM2ZHSrRTcHVGZqLiVs1og4CHnXs88gYjW5UmoBazEhvLQLu0_42INoIj6rbucIY1M4YBQsOKJVQxLU13Jh6bUA&usqp=CAc'},
        {id:1,brand:'Samsung',model:'Galaxy Ultra S22',price:800,discount:10,inStock:true,image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpkDu1_WYeaNZNPFk0zk1YGB7Eqqyp4BNpRZQ52BASDOd4aYGw8N_58NkQmD6zJ2UIIFm45xTb1-fNjGAjoONG0spNsDtDxRl-5hwrmTkE_mHZeyQpH5ri7S3SrJ2uml3Q97vo&usqp=CAc'},
        {id:1,brand:'Redmi',model:'note 11 Pro',price:800,discount:10,inStock:true,image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSh-AggFoRzl6TNO99UJizo_nT01mwCMqvxoISMJOVzEnU3UhzcpNn5HfrEwfOpyQtPQAsmUiS7Kc9hslr0U_SpH6CQFCJ6SAohYpPIXLMeI7RT9o8lbjPvqWJYdZ-PXS6yoQ&usqp=CAc'},


    ]

    return <div>
        <h1>Products</h1>
        <hr/>
        {data.map(product=><div>
            <h3>{product.brand} {product.model}</h3>
            <img src={product.image} />
            <b>Actual Price: ${product.price}</b>
        </div>)}
    </div>
}

export default ProductList;