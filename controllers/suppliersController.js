const Supplier = require('../models/supplier');
const axios = require('axios');
const { API_KEY } = require('../constants');

exports.suppliersController = {
    getSupplierById(req, res) {
        Supplier.findById(req.params.id)
            .then((result) => {
                if (result) {
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
        Supplier.find({}).sort({ rating: 'desc' }).exec((err, docs) => {
            if (err) {
                res.status(404).send(`Can't find supplier!`);
            } else {
                docs.forEach(element => {  // get the suppliers rating data from the GooglePlace API and update in mongo db
                    const ratingFromApi = {
                        method: `${req.method}`,
                        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.placeId}&key=${API_KEY}`,
                        headers: {}
                    }
                    axios(ratingFromApi)
                        .then(function (response) {
                            Supplier.updateOne(
                                { _id: element._id }, { $addToSet: { rating: `${response.data.result["rating"]}` } });
                        })
                })
                res.json(docs);
            }
        });
    }
};






