import React, { useState, useEffect } from "react";
import Layout from "../layout/mylayout";
import BlogItem from "./blogItem";
import LazyLoad from "react-lazyload";

export default function New() {
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
  console.log(blogs);
  const Loading = () => (
    <div>
      <h5>Loading...</h5>
    </div>
  );
  return (
    <Layout>
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
              
                    <BlogItem data={blog} />
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
