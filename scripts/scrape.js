// scrape script

// Require axios and cheerio to make scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Scrapes lifehacker's How I Work page

const scrape = function() {
    return axios.get("https://lifehacker.com/tag/how-i-work").then(function(res) {
        let $ = cheerio.load(res.data) ;
        // Array to store article data
        let articles = [];

        // Finding each element with a "title" class and loop
        $("article.postlist__item").each(function (i, element) {
            // Saves the Article Titles, the child with the class h1.headline
            let title = $(element).children().find("h1.headline").text().trim;
            console.log("#### TITLE #### " +title);
      
            // Saves the href
            let url = $(element).children().find("a").attr("href");
            console.log("#### LINK #### " +url);
      
            // Saves the description
            let summary = $(element).children().find("p").text().trim();
            console.log("#### SUMMARY #### " +summary);

            // checks to be sure that title, link, and summary exist
            if (title && link && summary) {
                // Initializes and object to push to the articles array
                let scrapedData = {
                    title: title,
                    summary: summary,
                    url: url
                }
                articles.push(scrapedData);
            }
        })
        return articles;
    })
}

// Export scrape function
module.exports = scrape;