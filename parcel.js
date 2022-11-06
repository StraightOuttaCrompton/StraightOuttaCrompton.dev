const Bundler = require("parcel-bundler");
const Path = require("path");
const { execSync } = require("child_process");

const isProductionBuild = process.env.NODE_ENV === "production";

let entryFiles = [Path.join(__dirname, "./public/index.html")];

const options = {};

(async () => {
    const bundler = new Bundler(entryFiles, options);

    bundler.on("buildEnd", () => {
        execSync("npm run postBundle");

        if (!isProductionBuild) return;

        execSync("npm run build:sw");
    });

    if (isProductionBuild) {
        const bundle = await bundler.bundle();
    } else {
        const bundle = await bundler.serve();
    }
})();
