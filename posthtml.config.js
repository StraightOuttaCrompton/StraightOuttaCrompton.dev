module.exports = {
    plugins: {
        "posthtml-modules": {
            root: "./public",
        },
        "posthtml-noopener": {},
        "posthtml-expressions": {
            locals: {
                ROOT_URL: process.env.ROOT_URL || "https://StraightOuttaCrompton.dev",
            },
        },
    },
};
