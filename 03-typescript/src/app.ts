import { buildLogger } from "./plugins/logger.plugin";
import { findHeroById } from "./services/hero.service";

const hero = findHeroById(3);
const logger = buildLogger('app.js');
logger.log(hero?.nombre ?? 'Heroe not found.')