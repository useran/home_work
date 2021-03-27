const MongoClient = require("mongodb").MongoClient;

const getSth = async(req, res) => {
  
  const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

  mongoClient.connect(function(err, client){
 
    client.db("Start_db").collection("test").find().toArray(function(err, results){
      
      if(err) return console.log(err);

      res.render('index', { resultsX: results });
      
      client.close();
    });

  });
} 

module.exports = {
  getSth,
}