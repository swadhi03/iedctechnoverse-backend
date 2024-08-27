const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema(
    {
        name:{type:String},
        college:{type:String},
        contact:{type:String},
        question:{type:String}
    }
)

const ContactModel = mongoose.model("contacts",ContactSchema)
module.exports = ContactModel