const axios = require('axios');

const outArr = [];

axios
    .get('https://dou.ua/')
    .then(r => {
        const reg = /https:\/\/[^ ]*\.(jpg|jpeg|png|gif|svg|ico)\b/gi;
        const output = r.data.match(reg);
        
        output.forEach(e => {
            outArr.push(e);
        });

        console.log(outArr);
    })
