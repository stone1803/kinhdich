import Link from 'next/link'
import Head from "next/head";
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCK23GvOrH3SMNEureUlKQasMz8BY-G2E8",
    authDomain: "quedichhoamai.firebaseapp.com",
    databaseURL: "https://quedichhoamai.firebaseio.com",
    projectId: "quedichhoamai",
    storageBucket: "quedichhoamai.appspot.com",
    messagingSenderId: "88913793943",
    appId: "1:88913793943:web:46f043cd5b104430a92ad2",
    measurementId: "G-7R6EHMTQNZ"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
const Blog = (props) => {
  return (
    <div>
      <Head>
      <title>{props.title}</title>
      <meta  name="description" content={props.content} />

      </Head>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('que64')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().tenQue;
      content['content'] = result.data().Des;
    });
return {
    props: {
      title: content.title,
      content: content.content,
    }
  }
}
export default Blog