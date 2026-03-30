module.exports = function(eleventyConfig) {
  // Pass through the assets folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Pass through _redirects file for hosting platform
  eleventyConfig.addPassthroughCopy("src/_redirects");

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
