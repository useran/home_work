const mongoose = require('mongoose');
const articleSchema = require('./schema.js');
const path = require('path');

const modelname = path.basename(__dirname);
const Article = mongoose.model(modelname, articleSchema);

module.exports = Article;