// https://www.bha.ee/how-to-make-your-parcel-js-app-progressive/
module.exports = {
    globDirectory: "dist/",
    globPatterns: ["**/*.{png,jpg,gif,ico,html,js,json,webmanifest,svg,css,map,woff,woff2,eot}"],
    swDest: "dist/serviceWorker.js",
};
