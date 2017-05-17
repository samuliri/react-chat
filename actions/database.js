import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDavXr7za0XbyTLXY4rEV6IpkexGLK2KGA',
  authDomain: 'chat-7234b.firebaseio.com',
  databaseURL: 'https://chat-7234b.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();
console.log(database);

export default database;
