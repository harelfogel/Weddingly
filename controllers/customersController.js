const request = require("request");
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
    // updateFlight(req, res) {
    //     const query = req.body;
    //     const flightId = req.params.id;
    //     fileLogger.write((req.method + ' request has launched Succesfully for flights in:' + (moment().format('MMMM Do YYYY, h:mm:ss a')) + os.EOL));
    //     Flight.findByIdAndUpdate(flightId, query, { returnOriginal: false })
    //         .then((updatedFlight) => {
    //             res.send(updatedFlight);
    //         })
    //         .catch(err => {
    //             logger.error(err);
    //             fileLogger.write((req.method + ' request Error for flights in:' + (moment().format('MMMM Do YYYY, h:mm:ss a')) + os.EOL));
    //             res.status(404).send(`Can't update flight!`);
    //         })
    // },
    // deleteFlight(req, res) {
    //     const query = req.body;
    //     const flightId = req.params.id;
    //     Flight.findByIdAndRemove(flightId)
    //         .then(data => {
    //             res.json({ message: `Flight with id:${flightId} succesfully removed.` })
    //         })
    //         .catch(err => {
    //             res.json({ message: `Can't delete flight!` })
    //         })
    // },
    // addFlight(req, res) {
    //     Flight.create(req.body)
    //         .then((newFlight) => {
    //             res.send(newFlight);
    //             fileLogger.write((req.method + ' request has launched Succesfully for flights in:' + (moment().format('MMMM Do YYYY, h:mm:ss a')) + os.EOL));
    //         })
    //         .catch((err) => {
    //             logger.error(err);
    //             res.status(404).send(`Can't add flight!`);
    //         })
    // }
};






