module.exports = {
    uri: 'mongodb://localhost:27017/Blog',
    options: {
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false,
      ignoreUndefined: true
    }
  }