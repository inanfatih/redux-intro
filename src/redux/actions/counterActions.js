import * as actionTypes from './actionTypes';

export const increaseCounter = () =>
  //ortadaki () ile increaseCounter bir fonksiyondur demis oluyoruz. Oktan sonra gelen kismin tamamini () icine alinca da fonksiyonun degeri bir fonksiyondur demis oluyoruz.
  //Asagidaki {} kisim da bir fonksiyonun bir parametresi. Parametre de burada bir object.
  ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1,
  });

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});
