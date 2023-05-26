import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, minLength:3},
        stars: { type: Number, required:true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('planetcount',{
    localField: '_id',
    ref: 'Planet',
    foreignField: 'galaxyId',
    justOne: false,
    count: true
})