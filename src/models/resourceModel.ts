//  src/models/ResourceModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ResourceSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a resource title'
    },
    description: {
        type: String,
        required: 'Enter a resource description'
    }
});