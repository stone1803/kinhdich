import React from "react";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  return (
    <div>
      <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {" "}
              📣 Mến chào !
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-base">
              Tôi là Phúc mọi người gọi là Phúc Mập. Web App này lập ra vì tôi
              muốn lưu lại những gì hay về dịch và tự nghiệm lý về nó. Nếu bạn
              thấy có hữu ích cho bạn hay người thân hãy chia sẽ nó. Chúc bạn có
              được nhiều thứ bạn mong muốn 🙏{" "}
            </p>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                <img
                  className="rounded-lg shadow-md bg-cover"
                  src="https://picsum.photos/seed/picsum/400/300"
                />
              </div>
              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                  </div>
                  <div class="category-title flex text-sm"> Kinh Dịch</div>
                </div>
                <div class="title-post font-medium">64 quẻ dịch trọn bộ</div>

                <div class="summary-post text-base text-justify">
                  Tổng hợp 64 quẻ dịch cho các bạn tra cứu dựa theo theo sách
                  "Kinh dịch - Đạo của người quân tử" của học giả Nguyễn Hiến Lê
                  <button
                    onClick={() => router.push("/64quedich/")}
                    type="button"
                    class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
                  >
                    <span class="">Xem chi tiết</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              {/* <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div> */}
              <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                <img
                  className="rounded-lg shadow-md bg-cover"
                  src="https://picsum.photos/seed/picsum/400/300"
                />
              </div>
              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                  </div>
                  <div class="category-title flex text-sm">
                    Bài viết tổng hợp
                  </div>
                </div>
                <div class="title-post font-medium">
                  Những bài viết huyền học hay
                </div>

                <div class="summary-post text-base text-justify">
                  Một số bài viết đặt sắc sưu tầm về dịch hay những bài được
                  nghiệm lý thực tế nhóm. Và những bài viết huyền học nói riêng
                  <button
                    onClick={() => router.push("/baiviet/")}
                    type="button"
                    class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
                  >
                    <span class="">Xem chi tiết</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              {/* <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div> */}
              <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                <img
                  className="rounded-lg shadow-md bg-cover"
                  src="https://picsum.photos/seed/picsum/400/300"
                />
              </div>
              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                  </div>
                  <div class="category-title flex text-sm"> Dịch vụ </div>
                </div>
                <div class="title-post font-medium">Luận đoán trả phí</div>

                <div class="summary-post text-base text-justify">
                  Tư vấn luận đoán sim số điện thoại , biển số xe . Đặt biệt tư
                  vấn hướng nghiệp như xem Bát Tử , Tử Vi , Và Dịch
                  <button
                    onClick={() => router.push("/baiviet/")}
                    type="button"
                    class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
                  >
                    <span class="">Xem chi tiết</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
