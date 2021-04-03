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

module.exports = {
  getArticles,
  addNewArticle
}