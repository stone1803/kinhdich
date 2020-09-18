import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

export default function index() {
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
  const storage = firebase.storage();
  const fire = firebase.firestore();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [tenque, setTenQue] = useState("");
  const [ynghia, setYnghia] = useState("");
  const [urlque, setUrlQue] = useState("");

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const save = (e) => {
    e.preventDefault();
  };
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
            fire.collection("raQue").doc(urlque).set({
              tenQue: tenque,
              ynghia: ynghia,
              hinhAnhQue: fireBaseUrl,
            });
          });
        console.log("them moi thang cong");
        alert("THEM MOI THANH CONG")
      }
    );
  };

  return (
    <div className="container bg-red-700	">
      THEM MOI
      <form onSubmit={handleFireBaseUpload}>
        <p>URL QUE</p>
        <input
          type="text"
          value={urlque}
          onChange={({ target }) => setUrlQue(target.value)}
        />
        <p>TEN QUE</p>
        <input
          type="text"
          value={tenque}
          onChange={({ target }) => setTenQue(target.value)}
        />
        <p>Y nghia</p>
        <input
          type="text"
          value={ynghia}
          onChange={({ target }) => setYnghia(target.value)}
        />
        <p>HINH ANH QUE</p>
        <input type="file" onChange={handleImageAsFile} />
        <button class="bg-blue-500">upload to firebase</button>
      </form>
      <button onClick={save}> SAVE </button>
    </div>
  );
}
