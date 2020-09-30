import Loader from "react-loader-spinner";
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />{" "}
    </div>
  );
}
