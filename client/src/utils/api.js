import axios from "axios";

export default {

    // Get route for saved Articles
    getSaved: function () {
        return axios.get("/api/saved")
          .then(function(results){
              return results;
          })
    },

    // Post route for saving new Articles
    // see below - do we just pass in "articleData", as the "books" app did?
    postSaved: function(title, author, date, url) {
        let newArticle = {title: title, author: author, date: date, url: url};
        return axios.post("/api/saved", newArticle)
          .then(function(results) {
              return results._id;
          })
    },

    // Delete route
    deleteSaved: function(title, data, url) {
        return axios.delete("api/saved", {
            params: {
                "title": title,
                "author": author,
                "data": data,
                "url": url
            }
        })
        .then(function(results) {
            return results;
        })
    }
}