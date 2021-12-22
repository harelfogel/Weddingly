const express = require("express");
require('dotenv').config(); 
const { customersRouter } = require("./routers/customersRouter");
const { suppliersRouter } = require("./routers/suppliersRouter");
//calling the cors lib to config the cors of the server
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3200;
//when cors() has no params - it will allow any request for any route
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/weddingly/customers', customersRouter);


app.use('/weddingly/suppliers', suppliersRouter); 
app.use('/weddingly/suppliers/:id', suppliersRouter);

app.use((req, res) => {
    res.status(400).send('Something is broken!');
});

app.listen(port, () => console.log((`Express server is running on port ${port}`)));