import React from "react";
import Layout from "../layout/mylayout";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";

export default function index() {
  useFirestoreConnect("que64"); // sync tips collection from Firestore into redux
  firebaseConnect("que64");
  const que64 = useSelector((state) => state.firestoreReducer.ordered.que64);
  console.log(que64);
  return <Layout>BÀI TẬP HUYỀN HỌC</Layout>;
}
