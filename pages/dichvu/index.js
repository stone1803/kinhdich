import React, { Component } from "react";
import Layout from "../layout/mylayout";
import ReactHtmlParser from "react-html-parser";
import firebase from "firebase";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default class index extends Component {
  connstructor() {
    this.state = {
      form: true,
      alert: false,
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
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
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "vn",
      }
    );
  };

  onSignInSubmit = (e) => {
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
    e.preventDefault();
    this.setUpRecaptcha();
    let phoneNumber = "+84" + this.state.mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase.auth().languageCode = "vn";

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        console.log("Result" + result.verificationID);
        let user = result.user;
        console.log(result.user);
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };
  dangnhap = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    var credential = firebase.auth.PhoneAuthProvider.credential(
      optConfirm,
      otpInput
    );
    credential
      .then(function (result) {
        // User signed in successfully.
        alert("DANG NHAP THANH CONG");
        console.log("Result" + result.verificationID);
        let user = result.user;
        console.log(result.user);
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };
  render() {
    let luandoanbattu = {
      noidung: `
        
        <p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p><p style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; margin: 0px; padding: 0px;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="color: #333333;"><b>Luận giải khái quát trọn đời mọi lứa tuổi</b></span></span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">1. Chi tiết mệnh cục</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"></p><ul><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tính cách</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Nghề nghiệp, sự nghiệp</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Mệnh chủ và lục thân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Mệnh chủ và con cái</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tình duyên, hôn nhân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Bạn bè, đồng nghiệp</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Công danh, tài lộc</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Sức khỏe</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Khả năng xuất ngoại</span></span></li></ul><p></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">2. Vận hạn ở các Đại vận và những năm đặc biệt</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"></p><ul><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tình duyên, hôn nhân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Con cái</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Công danh, tài lộc</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Sức khỏe</span></span></li></ul><p></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">3. Phân tích Hỉ Kị Họ Tên của Mệnh chủ</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">4. Các phương pháp Cải Tạo Vận Mệnh</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">5. Thời gian trả kết quả 1 Tuần</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p>
        
        
        `,
    };
    return (
      <Layout>
        <div class="mx-auto container ">
          <h1 className="text-bold">
            DỊCH VỤ XEM TRẢ PHÍ BÁT TỰ TRỌN ĐỜI KHÁI QUÁT
          </h1>
          <div className="pl-5 text-lg bg-orange-200 rounded-lg mt-2  w-full">
            {ReactHtmlParser(luandoanbattu.noidung)}
          </div>
          <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5 w-full">
            Vui lòng ghi đúng thông tin bạn nhé :) : ĐĂNG KÝ 
          </div>
          <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5 w-full">
                MỘT SỐ BÀI LUẬN MẪU
          </div>
        </div>
      </Layout>
    );
  }
}
