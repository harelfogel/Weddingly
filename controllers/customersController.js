
const Customer = require('../models/customer');
exports.customersController = {
  
    getCustomerById(req, res) {
        Customer.findById(req.params.id)
            .then((result) => {
                if (result) {
                    res.json(result);
                }
            })
            .catch((err) => {
                res.status(404).json({ message: `Can't find customer by id!` });
            })
    },
    getCustomers(req, res) {
        Customer.find()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.status(404).send(`Can't find Customers!`);
            })
    },
    // addNewMeeting(req, res) {
    //     const query = req.body;
    //     const customerId = req.body._id;
    //     console.log(customerId);
    //     Customer.findByIdAndUpdate(customerId, query, { returnOriginal: false })
    //         .then((updatedMeeting) => {
    //             res.send(updatedMeeting);
    //         })
    //         .catch(err => {
    //             res.status(404).json(`Can't update meeting!`);
    //         })
    // }
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
    addCustomer(req, res) {
        Customer.create(req.body)
            .then((newCustomer) => {
                res.json(newCustomer);
            })
            .catch((err) => {
                res.status(404).send(`Can't add customer!`);
            })
    }
};






