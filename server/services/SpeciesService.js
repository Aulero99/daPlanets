import { query } from "express"
import { dbContext } from "../db/DbContext"

class SpeciesService{
    async getSpecies(query) {
        const species = await dbContext.Species.find(query).populate('homeplanet')
    }

}

export const speciesService = new SpeciesService()