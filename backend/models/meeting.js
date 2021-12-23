const {Schema,model}= require('mongoose');

const scheduleSchema = new Schema ({
    dateTime:{type:Date},
    available:{type:Boolean}
});

const meetingSchema = new Schema ({
    _id:{type: Schema.Types.ObjectId,auto:true},   // gives a unique id
    supplierId:{type:String},
    schedule:[scheduleSchema]
},{collection:'meetings',strict:false}); // can be done versionKey: false but its not recommended therfore i didnt use it


const Meeting = model('Meeting', meetingSchema);

module.exports=Meeting;