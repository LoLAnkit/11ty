module.exports = function(eleventyConfig) {
  return {
    dir: {
     input: "src",                  // root input source
     includes: "templates",        // template to include
     output: "dist"                 // root output source
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
