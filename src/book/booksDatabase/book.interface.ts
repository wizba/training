import { Document } from 'mongoose';

export interface book extends Document{
    name:string;
    added:Date
}