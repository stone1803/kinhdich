import React, { Component } from "react";
import Layout from "../layout/mylayout";
import ReactHtmlParser from "react-html-parser";

export default class index extends Component {
  render() {
    let luandoanbattu = {
        noidung:`
        
        <p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p><p style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; margin: 0px; padding: 0px;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="color: #333333;"><b>Luận giải khái quát trọn đời mọi lứa tuổi</b></span></span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">1. Chi tiết mệnh cục</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"></p><ul><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tính cách</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Nghề nghiệp, sự nghiệp</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Mệnh chủ và lục thân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Mệnh chủ và con cái</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tình duyên, hôn nhân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Bạn bè, đồng nghiệp</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Công danh, tài lộc</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Sức khỏe</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Khả năng xuất ngoại</span></span></li></ul><p></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">2. Vận hạn ở các Đại vận và những năm đặc biệt</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"></p><ul><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Tình duyên, hôn nhân</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Con cái</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Công danh, tài lộc</span></span></li><li style="text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">Sức khỏe</span></span></li></ul><p></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">3. Phân tích Hỉ Kị Họ Tên của Mệnh chủ</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">4. Các phương pháp Cải Tạo Vận Mệnh</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;">5. Thời gian trả kết quả 1 Tuần</span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p><p style="box-sizing: border-box; color: #333333; font-family: roboto, &quot;segoe ui&quot;, arial, segoe, &quot;dejavu sans&quot;, &quot;trebuchet ms&quot;, verdana, sans-serif; font-size: 15px; margin: 0px 0px 10px; padding: 0px; text-align: justify;"><span style="box-sizing: border-box; font-size: 14px; margin: 0px; padding: 0px;"><span face="verdana, geneva, sans-serif" style="box-sizing: border-box; margin: 0px; padding: 0px;"><br /></span></span></p>
        
        
        `
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
          <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5">
           YÊU CẦU LUẬN TRẢI PHÍ ( ĐANG CẬP NHẬT)
          </div>
          <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5">
          
          </div>
          <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5">
          
          </div>
        </div>
      </Layout>
    );
  }
}
