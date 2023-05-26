import { dbContext } from "../db/DbContext"

class PlanetsService{
    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query).populate('galaxy')
        return planets
    }
    async createPlanet(planetData) {
        const newPlanet = (await dbContext.Planets.create(planetData)).populate('galaxy')
        return newPlanet
    }


}

export const planetsService = new PlanetsService()