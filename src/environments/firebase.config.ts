import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: 'AIzaSyAx0Wo5qiYzps_kReaCLr4AzlhYLFvK-MU',
  authDomain: 'gene-higgins.firebaseapp.com',
  databaseURL: 'https://gene-higgins.firebaseio.com',
  storageBucket: 'gene-higgins.appspot.com',
  messagingSenderId: '557188003562'
};

export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
