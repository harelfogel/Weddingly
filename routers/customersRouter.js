const { Router } = require('express');
const { customersController } = require('../controllers/customersController');
const { suppliersController } = require('../controllers/suppliersController');
const customersRouter = new Router();
const supplierssRouter = new Router();
module.exports = { customersRouter,suppliersController };

customersRouter.get('/' ,customersController.getCustomers); 
customersRouter.get('/:id', customersController.getCustomerById);
customersRouter.post('/meeting' ,customersController.createMeeting);
customersRouter.post('/add' ,customersController.addCustomer); 


  
