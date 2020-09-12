import Head from "next/head";
import "../styles/main.css";

import Layout from "./layout/mylayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quẻ Dịch Hoa Mai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="">
        
        {/* <Blog /> */}
    
      </Layout>
      </div>
  );
}
