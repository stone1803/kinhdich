import Link from "next/link";
import Head from "next/head";
import firebase from "firebase";
import Layout from "../layout/mylayout";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import PDFViewer from "pdf-viewer-reactjs";

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
const Blog = (props) => {
  const router = useRouter();
  const { asPath, route, query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.des} />
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.des} />
        <meta property="og:image" content={props.HinhAnh} />
      </Head>
      {/* <h2>{props.title}</h2>
      <p>
        {props.des}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link> */}
      <div class="mx-auto container ">
    <h1>{props.title}</h1>
    <img 
    className="mt-3"
    src={props.hinhAnh}/>
        <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5">
          {ReactHtmlParser(props.noidung)}
        </div>
     
        <button
          onClick={() => router.push("/baiviet/")}
          type="button"
          class="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          <span class="">Trở về</span>
        </button>
        <button
          onClick={() => router.push(props.download)}
          type="button"
          class="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          <span class="">Tải Sách </span>
        </button>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("tailieu")
    .doc(query.id)
    .get()
    .then((result) => {
      console.log(result.data);
      content["tenBaiViet"] = result.data().tenBaiViet;
      content["tomTat"] = result.data().tomTat;
      content["noiDung"] = result.data().noiDung;
      content["download"] = result.data().fileUrl;
      content["hinhAnh"] = result.data().hinhAnhUrl;

    });
  return {
    props: {
      title: content.tenBaiViet,
      des: content.tomTat,
      noidung: content.noiDung,
      download: content.download,
      hinhAnh : content.hinhAnh
    },
  };
};
export default Blog;
