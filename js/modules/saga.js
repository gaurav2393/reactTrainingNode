import { takeLatest, call, put } from 'redux-saga/effects';

export function* enrollToLoyalty(action){
  try {
      alert('saga');
  } catch (err) {
    console.log(err) // eslint-disable-line
  }
}

export default function* LoyaltyFormSaga() {
  try {
    yield takeLatest('something', enrollToLoyalty);
  } catch (err) {
    console.log(err) // eslint-disable-line
  }
}
