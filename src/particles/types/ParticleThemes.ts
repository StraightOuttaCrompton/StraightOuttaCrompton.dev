import { ThemeType } from "../../darkModeSwitch";
import IParticleTheme from "./IParticleTheme";

type ParticleThemes = {
    [key in ThemeType]: IParticleTheme;
};

export default ParticleThemes;
