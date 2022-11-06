import isDecemberOrJanuary from "../utils/isDecemberOrJanuary";
import defaultParticles from "./instances/defaultParticles";
import snowParticles from "./instances/snowParticles";

const showSnow = isDecemberOrJanuary();

showSnow ? snowParticles.init() : defaultParticles.init();
