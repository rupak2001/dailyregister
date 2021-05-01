const mongoose = require('mongoose')
const validator = require('validator')

const sc = mongoose.Schema({
    "name": { type: String },
    "email": {
        type: String,
        unique: [true, 'this email already exists'],
        validate(val) {
            if (!validator.isEmail) {
                throw new error('not a valid email');
            }
        }
    },
    "phone_no": { type: Number, maxlength: 12, minlength: 10, unique: [true, 'this no. already exists'] },
    "password": { type: String, unique: [true, "password already taken"] },
    "is_signedup": { type: Boolean, default: false },
    "maths":  {"date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "chemistry": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "mechanics": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "computer": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "electrical": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "chemistry-lab": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "computer-lab": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "electrical-lab": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "mechanical-lab": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
    "english-lab": { "date": { type: Number, default: 0 }, "attended": { type: Number, default: 0 } },
})

const reg_info = new mongoose.model("req_info", sc);

module.exports = reg_info;