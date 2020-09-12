import Link from "next/link";
import Head from "next/head";
import firebase from "firebase";
import Layout from "../layout/mylayout";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";

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

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
      </Head>
      {/* <h2>{props.title}</h2>
      <p>
        {props.des}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link> */}
      <div class="  container mx-auto">
        <div className="text-justif pl-2 bg-orange-200 rounded-lg">
        {ReactHtmlParser(props.noidung)}

        </div>
        <button
          onClick={() => router.push("/64quedich/")}
          type="button"
          class="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          <span class="">Trở về</span>
        </button>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("que64")
    .doc(query.id)
    .get()
    .then((result) => {
      content["title"] = result.data().tenQue;
      content["des"] = result.data().Des;
      content["content"] = result.data().content;
    });
  return {
    props: {
      title: content.title,
      des: content.des,
      noidung: content.content,
    },
  };
};
export default Blog;
