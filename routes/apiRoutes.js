var db = require("../models");

module.exports = function(app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function(data) {
            var hbsObject = {
                burgers: data
            };
            console.log("get route hit")
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });
    
    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create(req.body).then(function(results){
            res.json(results);
        })
    });
    
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update(req.body, {
            where: {
                id: req.body.id
            }
        })
    });
}