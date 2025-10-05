import express from 'express';

const app = express();

app.use(express.json());

app.get ('/hello', function (req, res) {
    res.send("Hello! from get");
});

app.post ('/hello', function (req, res) {
    res.send("Hello from a POST endpoint! Body: " + req.body.name);
});

app.listen(8000, function() {
    console.log("server is listening on port 8000");
});