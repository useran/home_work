import { 
  COUNTER1_PLUS1,
  COUNTER1_MINUS1,
  COUNTER2_PLUS1,
  COUNTER2_MINUS1,
 } from './countTypes';

export const c1plus1 = () => ({ type: COUNTER1_PLUS1 });
export const c1minus1 = () => ({ type: COUNTER1_MINUS1 });
export const c2plus1 = () => ({ type: COUNTER2_PLUS1 });
export const c2minus1 = () => ({ type: COUNTER2_MINUS1 });
