const renderIndex = (req, res) => {
  res.render('index');
}

const doSth = async(req, res) => {
  res.sendStatus(200);
} 


module.exports = {
  renderIndex,
  doSth
}