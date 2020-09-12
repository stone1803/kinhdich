import React, { useState, useEffect } from "react";
import Layout from "../layout/mylayout";
import Head from "next/head";
import Link from "next/link";
import firebase from "firebase";
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
export default function IndexQueDich() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("que64")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);
 if(!blogs){
   return <div>
     LOADING
   </div>
 }
  console.log(blogs);
  return (
    <Layout>
      <Head>
        <title>64 quẻ dịch trong kinh dịch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {" "}
              📣 Mến chào !
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-base">
              Dưới đây tập hợp 64 quẻ dịch gồm ý nghĩa chi tiết của nó chúc bạn
              tìm hiểu tốt trên đường học Dịch 🙏{" "}
            </p>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {blogs &&
              blogs.map((blog, index) => {
                return (
                  <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                    <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                      <img
                        className="rounded-lg shadow-md"
                        src="https://picsum.photos/seed/picsum/400/300"
                      />
                    </div>

                    <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                      <div class="header-content inline-flex ">
                        <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                          <div class="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                        </div>
                        <div class="category-title flex-1 text-sm">
                          {" "}
                          {blog.so}
                        </div>
                      </div>
                      <div class="title-post font-medium">{blog.tenQue}</div>

                      <div class="summary-post text-base text-justify">
                        {blog.Des.length > 150
                          ? blog.Des.substr(0, 150) + "..."
                          : blog.Des}
                        <Link
                          href="/64quedich/[id]"
                          as={"/64quedich/" + blog.id}
                        >
                          <button
                            type="button"
                            class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
                          >
                            <span class="">Xem chi tiết</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
// export async function getServerSideProps() {
//   var docRef = fire.firestore().collection("que64");
//   let data =null
//   docRef
//     .get()
//     .then(function (doc) {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         data = doc.data().JSON()
//       } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//       }
//     })
//     .catch(function (error) {
//       console.log("Error getting document:", error);
//     });
//   return {
//     props: {
//       docRef
//     },
//   };
// }
