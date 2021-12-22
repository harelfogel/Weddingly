const {Schema,model}= require('mongoose');

const appoitmentSchema = new Schema ({
    supplierId:{type:String},
    supplierName:{type:String},
    dateTime:{type:Date}
});


const customerSchema = new Schema ({
    _id:{type: Schema.Types.ObjectId,auto:true},   // gives a unique id
    brideName:{type:String},
    groomName:{type:String},
    email:{type:String},
    budget:{type:String},   
    bridePhone:{type:String},
    groomPhone:{type:String},
    appointment:[appoitmentSchema]
},{collection:'customers',strict:false}); // can be done versionKey: false but its not recommended therfore i didnt use it


const Customer = model('Customer', customerSchema);



module.exports=Customer;