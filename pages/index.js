import Head from "next/head";
import "../styles/main.css";
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";

import Layout from "./layout/mylayout";
import SEO from "../next-seo.config";

export default function Home() {
  return (
    <div>
      <DefaultSeo {...SEO} />

      <Layout className="">{/* <Blog /> */}</Layout>
    </div>
  );
}
