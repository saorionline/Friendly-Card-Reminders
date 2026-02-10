module.exports = function(eleventyConfig) {
// This takes files from src/css/modules and puts them in _site/css/
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/downloads"); // Add this line

  return {
    dir: {
      input: "src",
      includes: "_includes", 
      output: "dist",
      data: "_data"        // ← This should find src/_data

    }
  };
};