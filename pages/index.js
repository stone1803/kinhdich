import Head from "next/head";
import "../styles/main.css";
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import Layout from "./layout/mylayout";
import SEO from "../next-seo.config";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
export default function Home() {
  useFirestoreConnect("que64"); // sync tips collection from Firestore into redux
  firebaseConnect("que64");
  useFirestoreConnect("baiviet"); // sync tips collection from Firestore into redux
  firebaseConnect("baiviet");
  useFirestoreConnect("raQue"); // sync tips collection from Firestore into redux
  firebaseConnect("raQue");
  const que64 = useSelector((state) => state.firestoreReducer.ordered.que64);
  return (
    <div>
      <DefaultSeo {...SEO} />

      <Layout className="">{/* <Blog /> */}</Layout>
    </div>
  );
}
