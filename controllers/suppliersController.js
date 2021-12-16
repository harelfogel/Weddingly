const request = require("request");
const Supplier = require('../models/supplier');
const axios = require('axios');
const {API_KEY} = require('../constants');



exports.suppliersController = {
    getSupplierById(req, res) {
        Supplier.findById(req.params.id)
            .then((result) => {
                if(result){
                    //GooglePlace api:
                    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${result.placeId}&key=${API_KEY}`;
                    res.json(result);
                } 
            })
            .catch((err) => {
                res.status(404).send(`Can't find supplier by id!`);
            })
    },
    getSuppliers(req, res) {
        Supplier.find({}).sort({rating:'desc'}).exec((err,docs) => {
            if (err){
                res.status(404).send(`Can't find supplier!`);
            } else{
                docs.forEach((element) => {
                    const ratingFromApi={
                        method:`${req.method}`,
                        url : `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.placeId}&key=${API_KEY}`,
                        headers:{}
                    }
                    axios(ratingFromApi)
                    .then(function (response){
                        console.log(response.data.result["rating"]);
                    })
                    .catch(function (error){
                        res.json({message:"Errors with Google Api."});
                        console.log(error);
                    })    
                });
                res.json(docs);
            }
        });
            // .then((result) => {
            //     if(result){
            //         res.json(result);
            //     }
            // })
            // .catch((err) => {
            //     res.status(404).send(`Can't find supplier!`);
            // })
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






