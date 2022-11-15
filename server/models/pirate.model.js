const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
        },
        url: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
        },
        chests: {
            type: Number,
            required: [true, '{PATH} is required'],
            min: [1, '{PATH} must be atleast {MIN}']
        },
        catchphrase: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
        },
        position: {
            type: String,
            required: [true, '{PATH} is required']
        },
        pegleg: {
            type: Boolean,
            default: true
        },
        eyepatch: {
            type: Boolean,
            default: true
        },
        hookhand: {
            type: Boolean,
            default: true
        }
    }, {timestamps: true}
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = {Pirate: Pirate};