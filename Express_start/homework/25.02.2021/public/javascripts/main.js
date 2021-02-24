const axios = require('axios');

axios
    .get('https://dou.ua/')
    .then(r => {
        const reg = /https:\/\/[^ ]*\.(jpg|jpeg|png|gif|svg|ico)\b/gi;
        const output = r.data.match(reg);
        
        console.log(output);
    })
