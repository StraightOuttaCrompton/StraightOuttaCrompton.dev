import Particles from "../Particles";
import IParticleTheme from "../types/IParticleTheme";
import ParticleThemes from "../types/ParticleThemes";

const themes: ParticleThemes = {
    light: {
        nodeColor: "#222",
        edgeColor: "#222",
    },
    dark: {
        nodeColor: "#ffffff",
        edgeColor: "#ffffff",
    },
};

//https://github.com/VincentGarreau/particles.js/
function config(theme: IParticleTheme) {
    return {
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: theme.nodeColor,
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 50,
                color: "#ffffff",
                opacity: 0.6,
                width: 1,
            },
            move: {
                enable: true,
                speed: 5,
                direction: "bottom",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 300,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 300,
                    size: 5,
                    duration: 2,
                    opacity: 1,
                    speed: 3,
                },
                repulse: {
                    distance: 100,
                    duration: 0.5,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };
}

export default new Particles(themes, config);
