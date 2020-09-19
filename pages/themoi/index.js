import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

export default function index() {

  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [tenque, setTenQue] = useState("");
  const [ynghia, setYnghia] = useState("");
  const [urlque, setUrlQue] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
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
    async function fetchMyAPI() {
      let response = await firebase.firestore().collection("raQue").onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(blogs);
      });
    }
    fetchMyAPI();
    console.log(data)
  }, []);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const save = (e) => {
    e.preventDefault();
  };
  const handleFireBaseUpload = (e) => {
    const storage = firebase.storage();

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
        alert("THEM MOI THANH CONG");
      }
    );
  };

  if (!data) {
    return <div>LOADING</div>;
  }
  let show = ()=>{
    async function fetchMyAPI() {
      let response = await fire.collection("raQue").onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(blogs);
      });
    }
    fetchMyAPI();
    console.log(data)

  }
  let showdata =()=>{
    return data.map((data,index)=>{
       (
        <div>
          {data.tenQue}
        </div>
      )
    })
  }
  return (
    <div className="bg-red-700  mx-auto px-4">
      THEM MOI
      <form className="bg-red-700" onSubmit={handleFireBaseUpload}>
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
        <input
          className="btn btn-blue"
          type="file"
          onChange={handleImageAsFile}
        />
        <button className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          ADD NEW
        </button>
      </form>
      <button 
      onClick={show}> GET </button>
      <div className="h-full w-full">
      <button > SHOW </button>
        {showdata}
      </div>
    </div>
  );
}
