const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());
//server data
const customers =
[
{title:'Geo', id: 1},
{title:'Joy', id: 2},
{title:'Bob', id: 3},
]
app.get('/',(req,res)=>
{res.send("Hello REST API");
});
app.get('/api/customers',(req,res)=>
{res.send(customers);
});
app.get('/api/customers/:id',(req,res)=>
{const cust= customers.find(c => c.id === parseInt(req.params.id));
 res.send(cust);
});
const port = 8080
app.listen(port, () => console.log('Listening to the port', port,'...'));