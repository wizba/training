import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
    name:String,
    email:String,
    added: { type: Date, default: Date.now }
})