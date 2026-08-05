const {Schema,model} = require("mongoose")

const captainSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
        required:true
    },
    age:{
        type:Number,
   
    },
    licenseNumber:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    vehicle:{
        v_number:{
            type:String,
            required:true,
            unique:true
        },
        v_model:{
            type:String,
            required:true
        },
        v_color:{
            type:String
        },
        v_seat_capacity:{
            type:Number,
            required:true
        }
    },
    isOnline:{
type:Boolean,
default:false
    },
    rating:{
        type:Number,
        default:0
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    lat:{
        type:Number
    },
    lon:{
        type:Number
    }
},{timestamps:true})


captainSchema.pre('save',async function(next){
    
const c_year = new Date().getFullYear();
const d_year = new Date(this.DOB).getFullYear()

const age = c_year-d_year
this.age= age


})

const captainModel = model('captain',captainSchema)

module.exports=captainModel