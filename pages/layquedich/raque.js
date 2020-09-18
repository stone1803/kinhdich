import React, { useState, useEffect } from "react";
import firebase from "firebase";
export default function Raque({ data, props }) {
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
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
  useEffect(() => {
    tinhQue();
  }, []);

  const [tenQue, SetTenQue] = useState([]);
  const [quethuong, setquethuong] = useState(null);
  const [queha, setqueha] = useState(null);
  const [ketqua, setKetQua] = useState([]);
  console.log(tenQue);
  if (!tenQue) {
    return <div>ĐANG LẤY QUẺ</div>;
  }
  let tinhQue = () => {
    let quethuong = ((data.nam + data.thang + data.ngay) % 8).toString();
    let queha = ((data.ngay + data.thang + 1 + data.gio) % 8).toString();
    let quedong = (data.ngay + data.thang + data.gio) % 6;
    setqueha(queha);
    setquethuong(quethuong);
    let phuc = `${quethuong}${queha}`;
    console.log(phuc);
    const content = {};
    fire
      .firestore()
      .collection("raQue")
      .doc(phuc)
      .get()
      .then((result) => {
        console.log(result.data);
        if (!result.exists) {
          alert("Không tìm ra quẻ");
        } else {
          content["tenQue"] = result.data().tenQue;
          content["tenQueHo"] = result.data().tenQueHo;
          content["hinhAnhQue"] = result.data().hinhAnhQue;

          content["ynghia"] = result.data().ynghia;
          console.log(result.data().hinhAnhQue)
        }

        setKetQua({
          tenque: content.tenQue,
          tenqueho: content.tenQueHo,
          ynghia: content.ynghia,
          hinhAnhQue : content.hinhAnhQue
        });
      });
  };
console.log(ketqua)
  return (
    <div>
      <p>{ketqua.tenque}</p>
      <img src={ketqua.hinhAnhQue}/>

      <p>{ketqua.ynghia}</p>
    </div>
  );
}
