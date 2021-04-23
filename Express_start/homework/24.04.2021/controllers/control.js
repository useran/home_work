const Users = require('../model/Users/index.js');
const Papers = require('../model/Papers/index.js');
const moment = require('moment');

/* const input = {
  date: moment().toISOString(),
  name: 'Vacation request',
  memo: 'You are suggested to take vacation on May, 3-10',
  author: 'Your TeamLead',
  signerId: '607c0617b8661201ac311914'
} */

const getDataOut = async(req, res) => {
  const dataArr = await Papers.find({}, {__v:0}).populate('signerId', 'name');
  console.log(dataArr);
  res.json(dataArr);
  //Papers.create(input);
  //res.sendStatus(200);
} 



module.exports = {
  getDataOut,
}