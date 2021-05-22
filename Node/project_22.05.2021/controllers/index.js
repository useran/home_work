const Links = require('../model/Links/index.js');
const randomValue = require('./randomValue');


const getIndex = (req, res) => {
  res.render('index');
};

const saveLink = async(req, res) => {
  req.body.shortLink = randomValue(6);
  await Links.createEntry(req.body);
  res.send(req.body.shortLink);
};

const getProperLink = async(req, res) => {
  const { longLink } = await Links.findOne({ 'shortLink': req.params.linkId })
  res.redirect(`${longLink}`);
}

module.exports = {
  getIndex,
  saveLink,
  getProperLink
}

