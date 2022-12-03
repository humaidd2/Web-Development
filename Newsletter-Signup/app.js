// jshint esversion:6

const express = require('express');
const request = require("request");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) { 
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    console.log(firstName + " " + lastName);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us12.api.mailchimp.com/3.0/lists/ff9d8b235"

    const options = {
        method: "POST",
        auth: "humaid:dd2e7a470228683a1e83e6d6b09edba7-us12"
    };

    const request = https.request(url, options, function (response) {
        var responseCode = response.statusCode;
        if (responseCode === 200) {
            res.sendFile(__dirname + "/success.html")
        
        }
        else if (responseCode !== 200) {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function (req, res) {
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
