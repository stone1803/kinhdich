import React, { useState, useEffect } from "react";
import Layout from "../layout/mylayout";
import Head from "next/head";
import Link from "next/link";
import firebase from "firebase";
import LazyLoad from "react-lazyload";

export default function Data() {
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
  const fire = firebase;
  const [blogs, setBlogs] = useState([]);
  const [sua, setSua] = useState({});
  const [searchText, setSearchText] = useState("");
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fire
        .firestore()
        .collection("raQue")
        .onSnapshot((snap) => {
          const blogs = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setBlogs(blogs);
        });
    }
    fetchMyAPI();
  }, []);
  const excludeColumns = ["Des", "tenQue"];
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === null) setData(blogs);
    else {
      const filteredData = blogs.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setBlogs(filteredData);
    }
  };
  let handleQue = (data) => {
    setSua(data);
  };

  if (!blogs) {
    return <div>LOADNGDING</div>;
  }
  return (
    <div>
      <div>
        <ShowEdit sua={sua} />
      </div>
      <div>
        <table class="table-fixed">
          <thead>
            <tr>
              <th class="px-4 py-2">Tên Quẻ</th>
              <th class="px-4 py-2">Động Hào</th>
              <th class="px-4 py-2">Sửa</th>
            </tr>
          </thead>
          {blogs.map((e, i) => {
            return (
              <tbody key={i}>
                <Sua data={e} clickQue={handleQue} />
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
function Sua(props) {
  let { data } = props;
  return (
    <tr class="bg-gray-100">
      <td class="border px-4 py-2">{data.tenQue}</td>
      <td class="border px-4 py-2">
        <img src={data.hinhAnhQue} />
      </td>
      <td class="border px-4 py-2">
        <button
          className="btn"
          onClick={() => {
            props.clickQue({ data });
          }}
        >
          SỬA
        </button>
      </td>
    </tr>
  );
}
Data.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    console.log(json)
    return { stars: json.html_url }
  }
function ShowEdit({stars}) {
//   console.log(nextProps.sua.data.tenQue);
//   return (
//     <div>
//       <form class="w-full max-w-sm">
//         <div class="flex items-center border-b border-teal-500 py-2">
//           <h1>TÊN QUẺ</h1>
//           <input
//             class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder={nextProps.sua.data.tenQue}
//             aria-label="Full name"
//           />
//         </div>
//         <div class="flex items-center border-b border-teal-500 py-2">
//           <h1>TÊN QUẺ HỖ</h1>
//           <input
//             class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             aria-label="Full name"
//             placeholder={nextProps.sua.data.tenQue}
//           />
//         </div>
//       </form>
//     </div>
//   );
console.log(props)
return <div>Next stars: {stars}</div>

}
