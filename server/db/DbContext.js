import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy';
import { PlanetSchema } from '../models/Planet';
import { ColonySchema } from '../models/Colony';
import { SpeciesSchema } from '../models/Species';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Colonies = mongoose.model('Colony', ColonySchema)
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
