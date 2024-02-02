var mongoose =require('mongoose');
var userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      enrollmentDate: {
        type: Date,
        required: true
      },
      state: {
        type: String,
        default: 'Maharashtra'
      }
});
module.exports=mongoose.model('User',userSchema);
