// link to express
let connect = require('connect');
let url = require('url');


// create a new connect object
let app = connect();

// tax calculator "page" 
let calc = function(req, res, next) {
    // get the fulll querystring ?amount=1000
    let queryString = url.parse(req.url, true).query;

    //get the values method, x, and y from querystring
    let method = queryString.method;
    let x = parseFloat(queryString.x);
    let y = parseFloat(queryString.y);

    let answer = '';
    let sign = method;
    
    if (method === 'add') {
        answer = x + y;
        sign = '+';
        console.log(answer);
    } else if (method === 'subtract') {
        answer = x - y;
        sign = '-';
        } else if (method === 'multiply') {
            answer = x * y;
            sign = '*';
            } else if (method === 'divide') {
                    answer = x / y;
                    sign = '/';
                } else method = 'Method is undefined or something wrong with URL';

    // display values
    res.end(
        '<h1>Tax Calculator</h1>' + '<br />'  +
        'Method: ' + method + '<br />'  +
        'X: ' + x + '<br />'  +
        'Y: ' + y + '<br />'  +
        'X ' + sign +  ' Y' + ' = ' + answer
        );
};


// map the url's to the correct virtual pages
app.use('/lab2', calc);


// art the connect http Server
let port = process.env.PORT || 3000;
app.listen(3000);
console.log('Server running at http://localhost:3000/');

