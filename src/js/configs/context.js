// import firebase from 'firebase';
import {mount} from 'react-mounter';
import page from 'page';
import qs from 'qs';
import mainStore from './main-store';
import _ from 'underscore';

export const initContext = () => {

//   const config = {
//     apiKey: 'some-key',
//     authDomain: 'some-firebase.firebaseapp.com',
//     databaseURL: 'https://some-firebase.firebaseio.com',
//     storageBucket: 'some-firebase.appspot.com',
//   };

//   firebase.initializeApp(config);

  return {
    mount,
    // firebase,
    mainStore,
    page,
    qs,
    _
  };
};
