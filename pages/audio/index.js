import React, { useState, useEffect } from "react";
import Axios from "axios";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
export default function index() {
  useFirestoreConnect("mp3"); // sync tips collection from Firestore into redux
  firebaseConnect("mp3");
  const mp3 = useSelector((state) => state.firestoreReducer.ordered.mp3);
  function playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  const [url, setUrl] = useState("");

  let getdata = () => {
    console.log("phuc");
    Axios({
      url: "https://api.fpt.ai/hmi/tts/v5",
      method: "POST",
      data: noiDung,
      headers: {
        "api-key": "IeEtg1e6H2mGTxJCobXLRmlNUgrfBJ23",
        speed: "",
        voice: "linhsan",
      },
    })
      .then((result) => {
        console.log(result.data.async);
        setUrl(result.data.async);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [noiDung, setNoiDung] = useState("");
  const [file, setFile] = useState(0);
  let luunoidung = () => {
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
    const fire = firebase.firestore();
    console.log(url);
    fire
      .collection("canh")
      .doc(file)
      .set({
        stt: file,
        audio: url,
      });
    useFirestoreConnect("mp3"); // sync tips collection from Firestore into redux
    firebaseConnect("que64");
    const mp3 = useSelector((state) => state.firestoreReducer.ordered.mp3);
    console.log(mp3);
  };
  let showdata = () => {
    console.log(mp3);
  };
  return (
    <div className="container bg-red-400">
      <button
        onClick={getdata}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        GETDATA 1
      </button>
      <h1>---------------------------- </h1>

      <button
        onClick={luunoidung}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        LUU FIREBASE 2
      </button>
      <h1>---------------------------- </h1>

      <button
        onClick={showdata}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        SHOW DATA 3
      </button>
      <h1>---------------------------- </h1>
      <input
        className="bg-red-200"
        type="text"
        maxLength="5000"
        onChange={({ target }) => setFile(target.value)}
      />
      <h1>---------------------------- NOI DUNG</h1>
      <input
        className="bg-blue-200 w-100 h-100"
        type="text"
        maxLength="5000"
        onChange={({ target }) => setNoiDung(target.value)}
      />
      <button onClick={luunoidung}>LUU NOI DUNG</button>
      <div>
        <div>
          {mp3 &&
            mp3.map((e, i) => {
              return (
                <div>
                  <span>Play + {e.stt}</span>
                  <audio className="audio-element">
                    <source src={e.audio}></source>
                  </audio>
                  <audio controls>
                    <source src={e.audio} type="audio/ogg" />
                    <source src={e.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
