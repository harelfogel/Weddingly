const { Router } = require('express');
const { suppliersController } = require('../controllers/suppliersController');
const suppliersRouter = new Router();
module.exports = { suppliersRouter };

suppliersRouter.get('/', suppliersController.getSuppliers); 
suppliersRouter.get('/:id', suppliersController.getSupplierById);
// suppliersRouter.post('/',authController.checkKeyToken, flightsController.addFlight);
// suppliersRouter.put('/:id',authController.checkKeyToken, flightsController.updateFlight);
// suppliersRouter.delete('/:id',authController.checkKeyToken, flightsController.deleteFlight);
  