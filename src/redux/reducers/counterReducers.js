import * as actionTypes from '../actions/actionTypes';

//reducer aksiyona gore state belirliyor. State'i kontrol ettigimiz yer burasi
//reducer'lar aksiyonu icerip icermedigine bakacak.
//Component'ler sadece reducer'daki state lerden yararlanacak. Reducer'in icinde veritabani ya da API'a baglanilmaz. Sadece state yonetimi yapilir
const counterReducer = (state = 0, action) => {
  // eslint-disable-next-line no-unused-vars
  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);

    default:
      return state;
  }
};

export default counterReducer;

//Javascript Immutability
