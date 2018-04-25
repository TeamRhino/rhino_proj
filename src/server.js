const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


const constructTime = (iteration, timing) => {
    let time = ""
    switch(timing) {
        case ONE_MONTH:
            /* Five Minute Intervals */
            if (iteration % 12 < 2) {
                time = Math.floor(iteration/12%24) + ':0' + iteration%12 * 5;
            } else {
                time = Math.floor(iteration/12%24) + ':' + iteration%12 * 5;
            }
            break;
        case THREE_MONTHS:
            /* Fifteen Minute Intervals */
            if (iteration % 12 == 0) {
                time = Math.floor(iteration/4%24) + ':00' + iteration%4 * 15;
            } else {
                time = Math.floor(iteration/4%24) + ':' + iteration%4 * 15;
            }
            break;
        case SIX_MONTHS:
            /* Thirty Minute Intervals */
            if (iteration % 12 == 0) {
                time = Math.floor(iteration/4%24) + ':00'
            } else {
                time = Math.floor(iteration/2%24) + ':' + iteration%2 * 30;
            }
            break;
        case ONE_YEAR:
            /* One Hour Intervals */
            time = iteration%24 + ":00";
            break;
    }
    return time;
}

const constructData = (timing) => {
    let arr = [];
    for (let i = 0; i < MAX_DATA_POINTS; i++) {
        let time = constructTime(i,timing);
        let newobject = {
            "time": time,
            "solar": rows[i*5+1][4],
            "batt": rows[i*5+1][21],
            "pressure": rows[i*5+1][22],
            "temperature": rows[i*5+1][7],
            "humidity": rows[i*5+1][8] 
        };
        arr.push(newobject);
    }
    return arr;
}


Papa.parse(content, {
    header:false,
    delimiter: ",",
    complete: (results) => { rows = results.data; }
});

app.get('/api/hello', (req, res) => {
    res.send({ rows });
});

app.get('/api/one-month', (req, res) => {
    const hourlydata = constructData(ONE_MONTH);
    res.send({ hourlydata })
});

app.get('/api/three-month', (req, res) => {
    const hourlydata = constructData(THREE_MONTHS);
    res.send({ hourlydata })
});

app.get('/api/six-month', (req, res) => {
    const hourlydata = constructData(SIX_MONTHS);
    res.send({ hourlydata })
});

app.get('/api/one-year', (req, res) => {
    const hourlydata = constructData(ONE_YEAR);
    res.send({ hourlydata })
});

app.listen(port, () => console.log(`Listening on port ${port}`));