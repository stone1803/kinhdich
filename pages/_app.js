import "../styles/globals.css";
import "../styles/main.css";
import "../styles/Home.module.css";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import { createWrapper } from "next-redux-wrapper";
const firebaseConfig = {
  apiKey: "AIzaSyCK23GvOrH3SMNEureUlKQasMz8BY-G2E8",
  authDomain: "quedichhoamai.firebaseapp.com",
  databaseURL: "https://quedichhoamai.firebaseio.com",
  projectId: "quedichhoamai",
  storageBucket: "quedichhoamai.appspot.com",
  messagingSenderId: "88913793943",
  appId: "1:88913793943:web:46f043cd5b104430a92ad2",
  measurementId: "G-7R6EHMTQNZ",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./components/config/store/reducers/rootReducer";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded,
} from "react-redux-firebase";
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebaseReducer.auth);
  if (!isLoaded(auth))
    return (
      <div className="container text-center">
        <h1>VẠN PHẬT TÙY TÂM</h1>
      </div>
    );
  return children;
}
const middleWare = [thunk.withExtraArgument({ getFirestore, getFirebase })];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWare), reduxFirestore(firebase))
);
// cho store o tren moi chay vi cap store truoc sau do moi config firebase get database
const rrfConfig = {
  userProfile: "user",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  //enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
const makestore = () => store;
const wrapper = createWrapper(makestore);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <Component {...pageProps} />{" "}
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
export default wrapper.withRedux(MyApp);
