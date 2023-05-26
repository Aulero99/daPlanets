import { Schema } from "mongoose";

export const ColonySchema = new Schema(
    {
        name: { type: String, required: true },
        population: { type: Number, required: true},
        planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
        speciesId: {}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

ColonySchema.virtual('planet', 
    {
        localField: 'planetId',
        ref: 'Galaxy',
        foreignField: '_id',
        justOne: true
    }
)