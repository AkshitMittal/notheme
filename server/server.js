const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

app.get("/:number", (req, res) => {

    let userNumber = req.params.number;

    let fibonacci_series = (n) => {
        if (n == 1) {
            return [0, 1];
        } else if (n < 1) {
            return [0];
        } else {
            var s = fibonacci_series(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
    };
    let fibonacciNumber = fibonacci_series(userNumber);

    console.log(fibonacciNumber);

    let fibonacciResponse = {};

    fibonacciResponse.sequence = fibonacciNumber;

    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });

    res.end(JSON.stringify(fibonacciResponse));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});