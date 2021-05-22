module.exports = {
  uri: 'mongodb://localhost:27017/LinkDB',
  options: {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false,
    ignoreUndefined: true
  }
}