const getIndex = async(req, res) => {
  res.render('index')
} 

const processData = async(req, res) => {
  res.sendStatus(200);
} 


module.exports = {
  getIndex,
  processData
}