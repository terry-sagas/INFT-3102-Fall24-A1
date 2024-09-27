module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("games", function() {
        return require("./src/_data/games.json").games;
    });
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/gameicons");
    return {
        dir: {
        input: "src",
        //output: "dist"
      }
    };
  };
  