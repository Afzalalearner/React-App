import React from "react";
import Product from "./Product";

const ProductList =()=>{
    const data=[
        {id:1,brand:'Apple',model:'Iphone 13',price:800,inStock:false,discount:10,
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUN5FEz5FBdYBZmAyIUpggLzWvzH5pluFX4T34elj4GHIpSsnNIntK4yKo9izzPKvzHGeLcwcYZ13ypw&usqp=CAc'},
        {id:2,brand:'Samsung',model:'S22 Ultra',price:1200,inStock:true,discount:0,
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKJidiu7wfhliM5i3DbDuksrd9jEgG1OpGeYNkCf6vmpYEn9ihYM3xlIHorUK3FbbUciOoQRxPROE&usqp=CAc'},
        {id:3,brand:'Vivo',model:'V25',price:500,inStock:true,discount:5,
        image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDAf6MUKy7zTf5Eh50Oxf53bXVF1t-cRNUKWq9tCtR0cJJIsfIJ5_HDv3SLX9V&usqp=CAc'},
        {id:4,brand:'Redmi', model:'Note Pro 11',price:400,inStock:false,discount:20,
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1dTJ2Y3Qirq2XCsk9adQ9Mv8v3SpVUCaDwtKZoThYa2U7wXnwTsig0Y8In9WQl3gVq2OYlt6ShA&usqp=CAc'},
        {id:5,brand:'Nothing',model:'Phone 1',price:700,inStock:true,discount:15,
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyjl-25GgtUj7nqgKQU0DpJAkE2K2022-qlCcqey7LaQPLT_xPKkyWdMB6bkLwDDbDTFc04R9yAg&usqp=CAc'},

    ]
    
    return <div>
        <h1 style={{textAlign:"center"}}>Products</h1>
        <hr/>
    {data.map(product=><Product product={product}/>)}
</div>
}


export default ProductList;
