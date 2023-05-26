import { Schema } from "mongoose";

export const SpeciesSchema = new Schema(
    {
        name: { type: String, required: true },
        homePlanet: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' }
    }
)

SpeciesSchema.virtual('homeplanet', {
    localField: 'homePlanet',
    ref: 'Planet',
    foreignField: '_id',
    justOne: true
})