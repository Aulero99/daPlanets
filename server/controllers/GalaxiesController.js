import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router
        .get('', this.getGalaxies)
        .post('', this.createGalaxy)
    }
    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }
    
    async getGalaxies(req, res, next) {
        try {
            const query = req.query
            const galaxies = await galaxiesService.getGalaxies(query)
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}