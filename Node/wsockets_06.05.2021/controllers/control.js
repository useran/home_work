const getIndex = async(req, res) => {
  res.render('index')
} 

const processData = async(req, res) => {
  res.send(req.body.textbox);
} 


module.exports = {
  getIndex,
  processData
}