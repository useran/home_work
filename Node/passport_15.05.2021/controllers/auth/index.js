const authLocal = require('./local');
const authGoogle = require('./google');

const getLogOut = (req, res) => {
  req.logout();
  res.redirect('/');
};


module.exports = {
  getLogOut,
  authLocal,
  authGoogle,
}