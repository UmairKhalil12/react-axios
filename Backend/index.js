import express from 'express'
import cors from 'cors'; // Import cors middleware

const app = express();
app.use(cors()); // Use cors middleware

const port = process.env.Port || 4000;


app.listen((port), () => {
    console.log(`server is listening to port ${port}`);
});

app.get('/api/products', (req, res) => {

    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.unsplash.com/photo-1564383424695-05a0668266ec?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            name: 'plastic table ',
            price: 150,
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbosspakistan.com%2Fproducts%2Fboss-bp-214-s-steel-plastic-square-table-2-x-3&psig=AOvVaw2r2d4mOuDDJFBaGjPhqMpJ&ust=1712473870633000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICX9rSErYUDFQAAAAAdAAAAABAE'
        },
        {
            id: 3,
            name: 'glass table',
            price: 250,
            image: 'https://www.google.com/imgres?q=glass%20table&imgurl=https%3A%2F%2Fhoid.pk%2Fwp-content%2Fuploads%2F2023%2F06%2Fcompack-center-table-with-glass-top-600x600.jpg&imgrefurl=https%3A%2F%2Fhoid.pk%2Fproduct%2Fcompack-center-table%2F&docid=GP8ZK7hgcX7JyM&tbnid=6nSNYGEQFfoS_M&vet=12ahUKEwiPwMDQ-qyFAxWvSEEAHX0rAREQM3oECE0QAA..i&w=600&h=600&hcb=2&ved=2ahUKEwiPwMDQ-qyFAxWvSEEAHX0rAREQM3oECE0QAA'
        },
        {
            id: 4,
            name: 'polyester table',
            price: 100,
            image: 'https://images-cdn.ubuy.co.in/63a9224b9006631638138383-partisky-black-polyester-table-skirt-for.jpg'
        }
    ]


    //http://localhost:3000/api/products?search=glass

    if (req.query.search) {
        const filterProducts = products.filter(product =>
            product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    //res.send(products)
    // if we want some delay in sending our data
    setTimeout(() => {
        res.send(products);
    }, 3000)
})