import "particles.js"; // TODO: use https://github.com/matteobruni/tsparticles/ ?
import { handleInitialTheme, handleThemeChange, ThemeType } from "../darkModeSwitch";
import hexToRgb from "../utils/hexToRgb";
import IParticleTheme from "./types/IParticleTheme";
import ParticleThemes from "./types/ParticleThemes";

export default class Particles {
    private readonly _themes: ParticleThemes;
    private readonly _config: (theme: IParticleTheme) => object;
    private readonly _targetComponentId: string;

    constructor(
        themes: ParticleThemes,
        config: (theme: IParticleTheme) => object,
        targetComponentId: string = "particles-js"
    ) {
        this._themes = themes;
        this._config = config;
        this._targetComponentId = targetComponentId;
    }

    public init() {
        handleInitialTheme((themeType) => {
            const config = this._config(this._themes[themeType]);

            //@ts-ignore
            particlesJS(this._targetComponentId, config);
        });

        handleThemeChange((themeType) => {
            this.updatePJSDom(themeType);
        });
    }

    private updatePJSDom(themeType: ThemeType) {
        const { nodeColor, edgeColor } = this._themes[themeType];

        //@ts-ignore
        pJSDom[0].pJS.particles.array.forEach((particle, i) => {
            particle.color.value = nodeColor;
            particle.color.rgb = hexToRgb(nodeColor);
        });

        //@ts-ignore
        pJSDom[0].pJS.particles.line_linked.color = edgeColor;
        //@ts-ignore
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(edgeColor);
    }
}
