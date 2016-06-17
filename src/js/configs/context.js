import firebase from 'firebase';
import {mount} from 'react-mounter';
import page from 'page';
import qs from 'qs';
import mainStore from './main-store';
import _ from 'underscore';
import {marked, renderer} from './marked';

export const initContext = () => {

  const config = {
    apiKey: 'AIzaSyBfp6-LSIF7WUTWrKi5fOhrDmCfrb82gp8',
    authDomain: 'my-awesome-project-version.firebaseapp.com',
    databaseURL: 'https://my-awesome-project-version.firebaseio.com',
    storageBucket: 'my-awesome-project-version.appspot.com',
  };
  firebase.initializeApp(config);

  return {
    mount,
    marked,
    renderer,
    firebase,
    mainStore,
    page,
    qs,
    _
  };
};
