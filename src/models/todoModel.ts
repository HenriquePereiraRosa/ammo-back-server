//  src/models/todoModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a todo title'
    },
    description: {
        type: String,
        required: 'Enter a todo description'
    }
});