import express from "express";


const app = express();


app.get('/api/products',(req,res)=>{
    const products =[
        {
            id : 1,
            name : 'Food1',
            price :2000,
            image : 'https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id : 2,
            name : 'Food2',
            price :4000,
            image : 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id : 3,
            name : 'Food3',
            price :5000,
            image : 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id : 4,
            name : 'Food4',
            price :7000,
            image : 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id : 5,
            name : 'Food5',
            price :20000,
            image : 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]

    //http://localhost:3000/api/products?search=food

    if (req.query.search) {
       const filterProducts = products.filter(products => products.name.includes(req.query.search))
        res.send(filterProducts)
        return;
        
    }

    setTimeout(()=>{
        res.send(products);
    }, 3000);
        
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})