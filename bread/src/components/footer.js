import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate();

    return(
        <div className="footer">
          <svg
            onClick={() => {
              navigate("/main");
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clip-path="url(#clip0_39_29743)">
              <path
                d="M9.28125 4.21875C9.57465 3.87573 9.93887 3.60035 10.3489 3.41153C10.7588 3.22272 11.2049 3.12497 11.6563 3.125H38.3438C38.7951 3.12497 39.2412 3.22272 39.6511 3.41153C40.0611 3.60035 40.4254 3.87573 40.7187 4.21875L48.8719 13.7313C49.5998 14.5807 50 15.6625 50 16.7812V17.5781C50.0002 19.1249 49.5171 20.6331 48.6182 21.8919C47.7193 23.1508 46.4496 24.0973 44.9865 24.5992C43.5234 25.1011 41.94 25.1334 40.4577 24.6915C38.9754 24.2495 37.6682 23.3555 36.7188 22.1344C36.0254 23.0274 35.137 23.7499 34.1214 24.2466C33.1057 24.7433 31.9899 25.001 30.8594 25C29.7288 25.0013 28.6129 24.7437 27.5972 24.2469C26.5816 23.7502 25.6932 23.0276 25 22.1344C24.3068 23.0276 23.4184 23.7502 22.4028 24.2469C21.3871 24.7437 20.2712 25.0013 19.1406 25C18.01 25.0013 16.8941 24.7437 15.8785 24.2469C14.8628 23.7502 13.9744 23.0276 13.2812 22.1344C12.3318 23.3555 11.0246 24.2495 9.5423 24.6915C8.05998 25.1334 6.47661 25.1011 5.01351 24.5992C3.55041 24.0973 2.2807 23.1508 1.38182 21.8919C0.482943 20.6331 -0.000170621 19.1249 4.52017e-08 17.5781V16.7812C3.93986e-05 15.6625 0.400177 14.5807 1.12813 13.7313L9.28437 4.21562L9.28125 4.21875ZM14.8438 17.5781C14.8438 18.7177 15.2965 19.8107 16.1023 20.6165C16.9081 21.4223 18.001 21.875 19.1406 21.875C20.2802 21.875 21.3732 21.4223 22.179 20.6165C22.9848 19.8107 23.4375 18.7177 23.4375 17.5781C23.4375 17.1637 23.6021 16.7663 23.8951 16.4733C24.1882 16.1802 24.5856 16.0156 25 16.0156C25.4144 16.0156 25.8118 16.1802 26.1049 16.4733C26.3979 16.7663 26.5625 17.1637 26.5625 17.5781C26.5625 18.7177 27.0152 19.8107 27.821 20.6165C28.6268 21.4223 29.7198 21.875 30.8594 21.875C31.999 21.875 33.0919 21.4223 33.8977 20.6165C34.7035 19.8107 35.1562 18.7177 35.1562 17.5781C35.1562 17.1637 35.3209 16.7663 35.6139 16.4733C35.9069 16.1802 36.3043 16.0156 36.7188 16.0156C37.1332 16.0156 37.5306 16.1802 37.8236 16.4733C38.1166 16.7663 38.2812 17.1637 38.2812 17.5781C38.2813 18.7177 38.734 19.8107 39.5398 20.6165C40.3456 21.4223 41.4385 21.875 42.5781 21.875C43.7177 21.875 44.8107 21.4223 45.6165 20.6165C46.4223 19.8107 46.875 18.7177 46.875 17.5781V16.7812C46.875 16.4088 46.742 16.0487 46.5 15.7656L38.3438 6.25H11.6563L3.5 15.7656C3.25796 16.0487 3.12497 16.4088 3.125 16.7812V17.5781C3.125 18.7177 3.57771 19.8107 4.38353 20.6165C5.18935 21.4223 6.28227 21.875 7.42188 21.875C8.56148 21.875 9.6544 21.4223 10.4602 20.6165C11.266 19.8107 11.7188 18.7177 11.7188 17.5781C11.7187 17.1637 11.8834 16.7663 12.1764 16.4733C12.4694 16.1802 12.8668 16.0156 13.2812 16.0156C13.6957 16.0156 14.0931 16.1802 14.3861 16.4733C14.6791 16.7663 14.8438 17.1637 14.8438 17.5781ZM4.6875 26.5625C5.1019 26.5625 5.49933 26.7271 5.79235 27.0201C6.08538 27.3132 6.25 27.7106 6.25 28.125V46.875H43.75V28.125C43.75 27.7106 43.9146 27.3132 44.2076 27.0201C44.5007 26.7271 44.8981 26.5625 45.3125 26.5625C45.7269 26.5625 46.1243 26.7271 46.4174 27.0201C46.7104 27.3132 46.875 27.7106 46.875 28.125V46.875H48.4375C48.8519 46.875 49.2493 47.0396 49.5424 47.3326C49.8354 47.6257 50 48.0231 50 48.4375C50 48.8519 49.8354 49.2493 49.5424 49.5424C49.2493 49.8354 48.8519 50 48.4375 50H1.5625C1.1481 50 0.750671 49.8354 0.457646 49.5424C0.16462 49.2493 4.52017e-08 48.8519 4.52017e-08 48.4375C4.52017e-08 48.0231 0.16462 47.6257 0.457646 47.3326C0.750671 47.0396 1.1481 46.875 1.5625 46.875H3.125V28.125C3.125 27.7106 3.28962 27.3132 3.58265 27.0201C3.87567 26.7271 4.2731 26.5625 4.6875 26.5625ZM10.9375 28.125C11.3519 28.125 11.7493 28.2896 12.0424 28.5826C12.3354 28.8757 12.5 29.2731 12.5 29.6875V40.625H37.5V29.6875C37.5 29.2731 37.6646 28.8757 37.9576 28.5826C38.2507 28.2896 38.6481 28.125 39.0625 28.125C39.4769 28.125 39.8743 28.2896 40.1674 28.5826C40.4604 28.8757 40.625 29.2731 40.625 29.6875V40.625C40.625 41.4538 40.2958 42.2487 39.7097 42.8347C39.1237 43.4208 38.3288 43.75 37.5 43.75H12.5C11.6712 43.75 10.8763 43.4208 10.2903 42.8347C9.70424 42.2487 9.375 41.4538 9.375 40.625V29.6875C9.375 29.2731 9.53962 28.8757 9.83265 28.5826C10.1257 28.2896 10.5231 28.125 10.9375 28.125Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_29743">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => {
              navigate("/honeyzip");
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 51 50"
            fill="none"
          >
            <g clip-path="url(#clip0_39_29745)">
              <path
                d="M6.75001 18.7501C6.74991 15.6539 7.51657 12.6058 8.98151 9.87812C10.4465 7.1504 12.5641 4.82791 15.1453 3.11803C17.7266 1.40815 20.6911 0.364104 23.7742 0.0791129C26.8572 -0.205878 29.9629 0.277059 32.8138 1.4848C35.6648 2.69254 38.1723 4.5875 40.1124 7.00046C42.0525 9.41343 43.3649 12.2693 43.9324 15.3131C44.4999 18.3568 44.3047 21.4938 43.3645 24.4437C42.4242 27.3937 40.768 30.0649 38.5438 32.2189C37.9094 32.8314 37.4219 33.4689 37.1281 34.1532L34.7469 39.6814C34.6261 39.9615 34.4258 40.2002 34.1709 40.3679C33.9161 40.5356 33.6176 40.625 33.3125 40.6251C33.7269 40.6251 34.1243 40.7897 34.4174 41.0827C34.7104 41.3758 34.875 41.7732 34.875 42.1876C34.875 42.602 34.7104 42.9994 34.4174 43.2925C34.1243 43.5855 33.7269 43.7501 33.3125 43.7501C33.7269 43.7501 34.1243 43.9147 34.4174 44.2077C34.7104 44.5008 34.875 44.8982 34.875 45.3126C34.875 45.727 34.7104 46.1244 34.4174 46.4175C34.1243 46.7105 33.7269 46.8751 33.3125 46.8751L32.6125 48.272C32.3532 48.791 31.9545 49.2275 31.461 49.5328C30.9676 49.838 30.399 49.9998 29.8188 50.0001H21.1813C20.6011 49.9998 20.0324 49.838 19.539 49.5328C19.0456 49.2275 18.6469 48.791 18.3875 48.272L17.6875 46.8751C17.2731 46.8751 16.8757 46.7105 16.5827 46.4175C16.2896 46.1244 16.125 45.727 16.125 45.3126C16.125 44.8982 16.2896 44.5008 16.5827 44.2077C16.8757 43.9147 17.2731 43.7501 17.6875 43.7501C17.2731 43.7501 16.8757 43.5855 16.5827 43.2925C16.2896 42.9994 16.125 42.602 16.125 42.1876C16.125 41.7732 16.2896 41.3758 16.5827 41.0827C16.8757 40.7897 17.2731 40.6251 17.6875 40.6251C17.3819 40.6256 17.0828 40.5365 16.8273 40.3688C16.5717 40.201 16.371 39.962 16.25 39.6814L13.8719 34.1501C13.5314 33.4197 13.0504 32.7634 12.4563 32.2189C10.6488 30.4725 9.21198 28.3797 8.23155 26.0656C7.25113 23.7514 6.74724 21.2634 6.75001 18.7501ZM25.5 3.12511C22.388 3.12458 19.3468 4.05333 16.766 5.79233C14.1852 7.53133 12.1825 10.0014 11.0146 12.8859C9.8466 15.7704 9.56658 18.9379 10.2104 21.9826C10.8542 25.0272 12.3925 27.8103 14.6281 29.9751C15.45 30.7689 16.2344 31.7376 16.7406 32.9157L18.7188 37.5001H32.2875L34.2625 32.9157C34.7688 31.7376 35.5531 30.7689 36.375 29.9751C38.6109 27.8101 40.1492 25.0268 40.7929 21.9818C41.4366 18.9369 41.1563 15.769 39.988 12.8844C38.8196 9.99978 36.8165 7.52978 34.2352 5.79102C31.654 4.05226 28.6123 3.12395 25.5 3.12511Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_29745">
                <rect width="50" height="50" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <svg 
            onClick={() => {
            navigate("/my");
            }}
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
            <g clip-path="url(#clip0_39_29747)">
              <path
                d="M37.5 3.125C38.3288 3.125 39.1237 3.45424 39.7097 4.04029C40.2958 4.62634 40.625 5.4212 40.625 6.25V39.8594C40.625 39.8594 37.5 34.375 25 34.375C12.5 34.375 9.375 39.8594 9.375 39.8594V6.25C9.375 5.4212 9.70424 4.62634 10.2903 4.04029C10.8763 3.45424 11.6712 3.125 12.5 3.125H37.5ZM12.5 0C10.8424 0 9.25268 0.65848 8.08058 1.83058C6.90848 3.00269 6.25 4.5924 6.25 6.25V43.75C6.25 45.4076 6.90848 46.9973 8.08058 48.1694C9.25268 49.3415 10.8424 50 12.5 50H37.5C39.1576 50 40.7473 49.3415 41.9194 48.1694C43.0915 46.9973 43.75 45.4076 43.75 43.75V6.25C43.75 4.5924 43.0915 3.00269 41.9194 1.83058C40.7473 0.65848 39.1576 0 37.5 0L12.5 0Z"
                fill="black"
              />
              <path
                d="M25 31.25C26.2311 31.25 27.4502 31.0075 28.5877 30.5364C29.7251 30.0652 30.7586 29.3747 31.6291 28.5041C32.4997 27.6336 33.1902 26.6001 33.6614 25.4627C34.1325 24.3252 34.375 23.1061 34.375 21.875C34.375 20.6439 34.1325 19.4248 33.6614 18.2873C33.1902 17.1499 32.4997 16.1164 31.6291 15.2459C30.7586 14.3753 29.7251 13.6848 28.5877 13.2136C27.4502 12.7425 26.2311 12.5 25 12.5C22.5136 12.5 20.129 13.4877 18.3709 15.2459C16.6127 17.004 15.625 19.3886 15.625 21.875C15.625 24.3614 16.6127 26.746 18.3709 28.5041C20.129 30.2623 22.5136 31.25 25 31.25Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_29747">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
    )
}
export default Footer;