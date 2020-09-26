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
  useFirestoreConnect("tailieu"); // sync tips collection from Firestore into redux
  firebaseConnect("tailieu");
  const que64 = useSelector((state) => state.firestoreReducer.ordered.que64);
  let __protocol = document.location.protocol;
let __baseUrl = __protocol + "//livechat.fpt.ai/v35/src";

let prefixNameLiveChat = "Chát với Tôi Thích Học Thuật";
let objPreDefineLiveChat = {
    appCode: "3c0f5a7eebb6c5105e5518f601ad7806",
    themes: "",
    appName: prefixNameLiveChat ? prefixNameLiveChat : "Live support",
    thumb: "",
    icon_bot: "",
  },
  appCodeHash = window.location.hash.substr(1);
if (appCodeHash.length == 32) {
  objPreDefineLiveChat.appCode = appCodeHash;
}

let fpt_ai_livechat_script = document.createElement("script");
fpt_ai_livechat_script.id = "fpt_ai_livechat_script";
fpt_ai_livechat_script.src = __baseUrl + "/static/fptai-livechat.js";
document.body.appendChild(fpt_ai_livechat_script);

let fpt_ai_livechat_stylesheet = document.createElement("link");
fpt_ai_livechat_stylesheet.id = "fpt_ai_livechat_script";
fpt_ai_livechat_stylesheet.rel = "stylesheet";
fpt_ai_livechat_stylesheet.href = __baseUrl + "/static/fptai-livechat.css";
document.body.appendChild(fpt_ai_livechat_stylesheet);

fpt_ai_livechat_script.onload = function() {
  fpt_ai_render_chatbox(
    objPreDefineLiveChat,
    __baseUrl,
    "livechat.fpt.ai:443"
  )
};

  return (
    <div>
      <DefaultSeo {...SEO} />

      <Layout className="">{/* <Blog /> */}</Layout>
    </div>
  );
}
