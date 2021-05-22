module.exports = length => {
  const valuesForRandom = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'; 
  let str = '';
  for (let i=0; i<length; i++){
    let randomIndex = Math.floor(Math.random() * valuesForRandom.length); 
    str = `${str}${valuesForRandom[randomIndex]}`
  }
  return str;
}