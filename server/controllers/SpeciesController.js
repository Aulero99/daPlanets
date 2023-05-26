import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController{
    constructor(){
        super('api/species')
        this.router
        .get('', this.getSpecies)
    }
    async getSpecies(req, res, next) {
        try {
            const query = req.body
            const species = await speciesService.getSpecies(query)
        } catch (error) {
            next(error)
        }
    }
}