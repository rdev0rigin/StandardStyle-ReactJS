import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import { FIREBASE_CONFIG } from './configs/firebase.config';
import App from './App';
import './index.css';

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
	<App/>,
	document.getElementById('root') as HTMLElement
);
