import React from "react";
import Layout from "../layout/mylayout";
import BaiTap from "../quiz/quiz"
import Head from "next/head";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Hệ thống bài tập về Huyền Học</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Tổng hợp những bài tập từ cơ bản đến nâng cao do chính wep app biên soạn. gòm nhũng bài tập về Tử Vi Kinh Dịch Và Bát Tự"
        />
      </Head>
      <div class="flex mb-4 container bg-red-500">
        <div class="w-3/4 bg-organe-500 h-full">
          <div>
            <h1 className="text-center mt-3">Bài Tập Cơ bản</h1>
          <BaiTap/>
          </div>
        </div>
     
      </div>
    </Layout>
  );
}
