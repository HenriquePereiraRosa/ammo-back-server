//  src/models/ResourceModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ResourceSchema = new Schema({
    image1: {
        type: String,
        required: 'Enter a resource image 1.'
    },
    image2: {
        type: String,
        required: 'Enter a resource image 2.'
    },
    image3: {
        type: String,
        required: 'Enter a resource image 3.'
    },
    image4: {
        type: String,
        required: 'Enter a resource image 4.'
    },
    description: {
        type: String,
        required: 'Enter a producty description.'
    },
    category: {
        type: String,
        required: 'Enter a product category.'
    },
    normalPrice: {
        type: Number,
        required: 'Enter a price.'
    },
    promoPrice: {
        type: Number,
        required: 'Enter a promotional price.'
    }
});