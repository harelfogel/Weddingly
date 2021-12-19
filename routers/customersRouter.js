const { Router } = require('express');
const { customersController } = require('../controllers/customersController');
const customersRouter = new Router();
module.exports = { customersRouter };

customersRouter.get('/', customersController.getCustomers); 
customersRouter.get('/:id', customersController.getCustomerById);
// suppliersRouter.post('/',authController.checkKeyToken, flightsController.addFlight);
// suppliersRouter.put('/:id',authController.checkKeyToken, flightsController.updateFlight);
// suppliersRouter.delete('/:id',authController.checkKeyToken, flightsController.deleteFlight);
  