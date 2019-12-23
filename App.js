import React, {Component} from 'react';
import StackNavigator from './Navigator/StackNavigator';
import * as firebase from 'firebase';

export default class App extends Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAX7builQPAFQ5zy2a94ykgvE2Nli_SCYY",
      authDomain: "leading-university-74fa3.firebaseapp.com",
      databaseURL: "https://leading-university-74fa3.firebaseio.com",
      projectId: "leading-university-74fa3",
      storageBucket: "leading-university-74fa3.appspot.com",
      messagingSenderId: "600070311698",
      appId: "1:600070311698:web:0484f91ea2b66f25966dcb",
      measurementId: "G-Y71NBEY11R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  render() {
    return (
      <StackNavigator/>
    );
  }
}