import axios from 'axios';

const CAT_REFRESH = 'CAT_REFRESH';
const DOG_PREV = 'DOG_PREV';
let count = 1;

const btnR = () => (dispath) => {
  console.log('action!');
  count = 1;
  axios.get('https://dog.ceo/api/breed/hound/images/random')
    .then(r => {
      dispath({
        type: CAT_REFRESH,
        newUrl: r.data.message,
      }); 
    });
};

const btnP = () => (dispath) => {
  count += 1;
  dispath({ type: DOG_PREV, count: count });
};


export default btnR;
export {
  btnP
}