import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
export default function At() {
    useFirestoreConnect("at"); // sync tips collection from Firestore into redux
    firebaseConnect("at");
    const mp3 = useSelector((state) => state.firestoreReducer.ordered.at);
    console.log(mp3);
  return (
  <div className="container">
      <h1>NÓI VỀ ẤT - THẬP CAN TINH TÚY</h1>
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
  );
}
