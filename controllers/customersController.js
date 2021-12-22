// const request = require("request");
const Customer = require('../models/customer');
const {API_KEY}=require('../constants');


exports.customersController = {
  
    getCustomerById(req, res) {
        Customer.findById(req.params.id)
            .then((result) => {
                // using Google Place API api to get weather information
                res.json(result);
            })
            .catch((err) => {
                logger.error(err);
                res.status(404).send(`Can't find customer by id!`);
            })
    },
    getCustomers(req, res) {
        Flight.find()
            .then((result) => {
               
                res.send(result);
            })
            .catch((err) => {
                logger.error(err);
                res.status(404).send(`Can't find Customers!`);
            })
    }
   
};






