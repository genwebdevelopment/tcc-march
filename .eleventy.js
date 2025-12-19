module.exports = function(eleventyConfig) {
  // Pass through the assets folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
