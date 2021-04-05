const Articles = require('../model/Articles/index.js');

const getArticles = async(req, res) => {
  const data = await Articles.find({});
  res.render('index', { articles: data });
} 
 
const addNewArticle = async(req, res) => {
  const newArticle = new Articles(req.body);
  try {
    await newArticle.save();
    const dataOut = await Articles.find({}, {__v:0});
    res.send(dataOut);
  } catch(err) {
    res.send(err.message);
  }
}

const searchPage = async(req, res) => {
  const data = await Articles.find({});
  res.render('search', { articles: data });
} 

const searchArticle = async(req, res) => {
  const dataOut = await Articles.find({ date: { '$gte': req.body.from, '$lte': req.body.to }}, {__v:0});
  res.send(dataOut);
} 

const searchArticleByTag = async(req, res) => {
  const dataOut = await Articles.find({ tags: { '$in': req.body.tags }}, {__v:0});
  res.send(dataOut);
} 

module.exports = {
  getArticles,
  addNewArticle,
  searchPage,
  searchArticle,
  searchArticleByTag
}