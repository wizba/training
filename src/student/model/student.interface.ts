import { Document } from 'mongoose';

export interface student extends Document {
    name:string;
    email:string;
    created:Date;
}