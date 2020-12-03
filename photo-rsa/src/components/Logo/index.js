/*
    logo component
    author: Hosung Lee
    date: 2020-10-07
*/
import React, { Component } from "react";

export default class Logo extends Component {
  defaultSize = 80;

  render() {
    return (
      <svg
        width={this.props.size ? this.props.size : this.defaultSize}
        height={this.props.size ? this.props.size : this.defaultSize}
        viewBox="0 0 99 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={this.props.style}
      >
        <g clipPath="url(#clip0)">
          <path
            d="M66.1341 96.2471C65.4975 96.196 64.8522 96.0642 64.2217 95.842L6.88677 75.4509C2.9589 74.0222 0.897798 69.6695 2.27339 65.7374L11.8765 38.7748C12.2305 37.7849 13.3158 37.2809 14.3031 37.6194C15.2933 37.9696 15.8084 39.0597 15.4585 40.046L5.8598 67.0013C5.17201 68.9674 6.20923 71.1557 8.17665 71.8741L65.4894 92.2559C67.459 92.9478 69.6315 91.9169 70.3149 89.9581L74.1539 79.2294C74.5079 78.2395 75.5945 77.7203 76.5841 78.0781C77.5739 78.432 78.0852 79.5218 77.7353 80.5082L73.9013 91.2221C72.7404 94.5231 69.4914 96.5164 66.1341 96.2471Z"
            fill="#D3E1ED"
          />
          <path
            d="M85.1876 74.8935L24.5592 70.0305C20.3797 69.6952 17.2533 66.0236 17.5886 61.8441L21.2358 16.3728C21.571 12.1933 25.2427 9.06691 29.4222 9.40215L90.0506 14.2651C94.2301 14.6004 97.3565 18.272 97.0212 22.4516L93.374 67.9228C93.0388 72.1024 89.3672 75.2287 85.1876 74.8935ZM29.1183 13.1914C27.0304 13.024 25.1925 14.5889 25.0251 16.6768L21.3778 62.148C21.2104 64.2359 22.7753 66.0737 24.8632 66.2412L85.4915 71.1042C87.5794 71.2717 89.4173 69.7068 89.5847 67.6189L93.232 22.1476C93.3994 20.0597 91.8345 18.2219 89.7466 18.0544L29.1183 13.1914Z"
            fill="#D3E1ED"
          />
          <path
            d="M38.6625 36.8389C34.4829 36.5036 31.3566 32.832 31.6918 28.6525C32.0271 24.4729 35.6987 21.3465 39.8782 21.6818C44.0578 22.017 47.1841 25.6886 46.8489 29.8682C46.5136 34.0478 42.842 37.1741 38.6625 36.8389ZM39.5743 25.4711C37.4864 25.3036 35.6485 26.8685 35.4811 28.9564C35.3136 31.0443 36.8785 32.8821 38.9664 33.0496C41.0543 33.2171 42.8922 31.6521 43.0596 29.5643C43.2271 27.4764 41.6622 25.6385 39.5743 25.4711Z"
            fill="#D3E1ED"
          />
          <path
            d="M19.4658 65.5413C18.9808 65.5024 18.5106 65.2779 18.1688 64.8805C17.4891 64.0823 17.5855 62.8811 18.3836 62.2015L37.7159 45.7403C40.0326 43.7676 43.7802 44.0682 45.7529 46.3849L50.6533 52.14L66.8205 35.627C67.9959 34.4285 69.6321 33.8084 71.312 33.9279L71.3537 33.9312C73.0134 34.0644 74.5282 34.9105 75.5107 36.2592L93.474 60.9709C94.0925 61.8176 93.9055 63.0077 93.0551 63.6259C92.2084 64.2445 91.0218 64.0616 90.4 63.207L72.4368 38.4953C72.1033 38.0415 71.6143 37.7658 71.0497 37.7205C70.6584 37.6548 69.9431 37.872 69.5399 38.2859L51.9147 56.2874C51.5409 56.6693 51.0247 56.8758 50.4886 56.8557C49.9475 56.8504 49.453 56.5972 49.1082 56.1882L42.859 48.849C42.2 48.0792 40.9533 47.9792 40.18 48.6342L20.8478 65.0954C20.4507 65.4335 19.9508 65.5802 19.4658 65.5413Z"
            fill="#D3E1ED"
          />
          <path
            d="M55.3167 64.3188V69.6439H54.9624C52.7323 69.6439 50.9191 71.4571 50.9191 73.6872V95.9567C50.9191 98.1868 52.7323 100 54.9624 100H86.0376C88.2677 100 90.0809 98.1868 90.0809 95.9567V73.6767C90.0809 71.4467 88.2677 69.6334 86.0376 69.6334H85.9334V64.3083C85.9334 55.8674 79.066 49 70.6251 49C62.1841 49.0104 55.3167 55.8778 55.3167 64.3188ZM72.8968 85.8067C72.5842 86.036 72.5008 86.2548 72.5008 86.6195C72.5112 88.2556 72.5112 89.8813 72.5112 91.5174C72.5425 92.1947 72.1986 92.8617 71.5942 93.1639C70.1665 93.8933 68.7389 92.8721 68.7389 91.5174V91.5069C68.7389 89.8709 68.7389 88.2348 68.7493 86.5987C68.7493 86.2652 68.6763 86.0464 68.3846 85.8275C66.9048 84.7333 66.415 82.868 67.1549 81.2319C67.8739 79.6375 69.6351 78.6996 71.292 79.0331C73.1365 79.4083 74.4183 80.888 74.4391 82.7325C74.4391 84.0143 73.9285 85.0564 72.8968 85.8067ZM62.0174 64.3188C62.0174 59.5668 65.8835 55.7111 70.6251 55.7111C75.377 55.7111 79.2327 59.5772 79.2327 64.3188V69.6439H62.0174V64.3188Z"
            fill="#D3E1ED"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="91.2346"
              height="91.2346"
              fill="white"
              transform="translate(7.29446) rotate(4.58587)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
