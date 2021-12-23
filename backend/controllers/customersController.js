
const Customer = require('../models/customer');


function splitStringBetweenUppercase(stringValue){
     let newString= stringValue.split(/(?=[A-Z])/);
     let returnedString="";
     newString.forEach(element => {
        returnedString+=' '+element;
     });
    return  returnedString;
}

function splitStringBetweenLetterP(stringValue){
    let newString= stringValue.split("p")[0];
    return (newString+" "+"pm");
}
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
    addCustomer(req, res) {
        Customer.create(req.body)
            .then((newCustomer) => {
                res.json(newCustomer);
            })
            .catch((err) => {
                res.status(404).send(`Can't add customer!`);
            })
    },
    createMeeting(req,res){
        const customerId=req.body.meetingCustomerId;
        const newMeeting={
            meetingSupplierId:req.body.meetingSupplierId,
            meetingSupplierName:splitStringBetweenUppercase(req.body.meetingSupplierName),
            meetingId:req.body.meetingId,
            meetingDate:req.body.meetingDate,
            meetingHour:splitStringBetweenLetterP(req.body.meetingHour)
        };
        Customer.findOneAndUpdate({
            _id: customerId
         }, {
            $push: {
                appointment:{
                    "supplierId":newMeeting.meetingSupplierId,
                    "supplierName":newMeeting.meetingSupplierName,
                    "date":newMeeting.meetingDate,
                    "hour":newMeeting.meetingHour
                }
            }
         }, {
            new: true,
            upsert: true
         })
         .exec(() =>{
             res.status(200).json(req.body);   
         })
    }
};






