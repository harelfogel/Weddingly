const {Schema,model}= require('mongoose');

const locationSchema = new Schema ({
    country:{type:String},
    cityId:{type:String},
    city:{type:String},
    address:{type:String}
});

const nameSchema = new Schema ({
    brideName:{type:String},
    groomName:{type:String}
});

const phoneSchema = new Schema ({
    bridePhone:{type:String},
    groomPhone:{type:String}
});


const customerSchema = new Schema ({
    _id:{type: Schema.Types.ObjectId,auto:true},  
    placeId:{type:String},
    name:[nameSchema],
    email:{type:String},
    initialBudget:{type:String},   
    currentBudget: {type: String},
    phone:[phoneSchema],
    location:[locationSchema],
},{collection:'customers',strict:false}); 



const Customer = model('Customer', customerSchema);



module.exports=Customer;