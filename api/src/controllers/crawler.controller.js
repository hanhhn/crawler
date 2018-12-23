"use strict";

const crawler = require("../services/scrawler.service");

exports.search = async function(request, responese) {
  const keyword = request.params.keyword;

  var result = [];

  const phimmoi = await crawler
    .phimmoi(keyword)
    .then(function(data) {
      result.push(...data);
    })
    .catch(function(err) {
      console.log("phim moi error");
    });

  const hdo = await crawler
    .hdo(keyword)
    .then(function(data) {
      result.push(...data);
    })
    .catch(function(err) {
      console.log("hdo error");
    });

  Promise.all([phimmoi, hdo]);
  responese.json(result);
};
