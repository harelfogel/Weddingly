const {Schema,model}= require('mongoose');

const appoitmentSchema = new Schema ({
    supplierId:{type:String},
    supplierName:{type:String},
    dateTime:{type:Date}
});


const customerSchema = new Schema ({
<<<<<<< HEAD
    _id:{type: Schema.Types.ObjectId,auto:true},   // gives a unique id
    brideName:{type:String},
    groomName:{type:String},
    email:{type:String},
    budget:{type:String},   
    bridePhone:{type:String},
    groomPhone:{type:String},
    appointment:[appoitmentSchema]
},{collection:'customers',strict:false}); // can be done versionKey: false but its not recommended therfore i didnt use it
=======
    _id:{type: Schema.Types.ObjectId,auto:true},  
    placeId:{type:String},
    name:[nameSchema],
    email:{type:String},
    initialBudget:{type:String},   
    currentBudget: {type: String},
    phone:[phoneSchema],
    location:[locationSchema],
},{collection:'customers',strict:false}); 

>>>>>>> 53c9e301fee9b9a470cc16439e2e95e8000bef4c


const Customer = model('Customer', customerSchema);



module.exports=Customer;