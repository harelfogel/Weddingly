const { Router } = require('express');
const { customersController } = require('../controllers/customersController');
const customersRouter = new Router();
module.exports = { customersRouter };

customersRouter.get('/', customersController.getCustomers); 
customersRouter.get('/:id', customersController.getCustomerById);
