var express = require("express");

var router = express.Router();


var quiz = require("../models/quiz.js");

// Create all our routes and set up logic within those routes where required.
router.get("/createquiz", function(req, res) {
      res.render("createQuiz");
});

router.get("/", function(req, res) {
  res.render("signin");
});

router.post("/api/quiz", function(req, res) {
    res.json({results});
  });

/*router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});*/

// Export routes for server.js to use.
module.exports = router;
