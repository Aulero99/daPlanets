import { dbContext } from "../db/DbContext"

class GalaxiesService{
    async createGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)
        return newGalaxy
    }

    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query).populate('planetcount')
        return galaxies
    }

}

export const galaxiesService = new GalaxiesService()