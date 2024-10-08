"use client";

import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";


export function CardDemo({ title, description, type, onClick }) {
  return (
    <div onClick={onClick}>
      <Card className={"hover:border-blue-300 hover:shadow-lg cursor-pointer"}>
        <CardSkeletonContainer>
          <Skeleton type={type} />
        </CardSkeletonContainer>
        <CardTitle className={"text-lg"}>{title}</CardTitle>
        <CardDescription className={"text-sm"}>
          {description}
        </CardDescription>
      </Card>
    </div>
  );
}

const Skeleton = ({ type }) => {

  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, { repeat: Infinity, repeatDelay: 1 });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">

        <Container className="h-8 w-8 circle-1">
          {type === '1' ? (
            <ClaudeLogo className="h-4 w-4" />
          ) : (
            <DataTable className="h-4 w-4" />
          )}
        </Container>

        <Container className="h-12 w-12 circle-2">
          {type === "1" ? (
            <GoCopilot className="h-6 w-6 dark:text-white" />
          ) : (
            <CsvLogo className="h-6 w-6 dark:text-white" />
          )}
        </Container>

        <Container className="circle-3">
          {type === "1" ? (
            <OpenAILogo className="h-8 w-8 dark:text-white" />
          ) : (
            <AiLogo className="h-8 w-8 dark:text-white" />
          )}
        </Container>

        <Container className="h-12 w-12 circle-4">
          {type === "1" ? (
            <MetaIconOutline className="h-6 w-6" />
          ) : (
            <MongoDb className="h-6 w-6" />
          )}

        </Container>

        <Container className="h-8 w-8 circle-5">
          {type === "1" ? (
            <GeminiLogo className="h-4 w-4" />
          ) : (
            <Db className="h-4 w-4" />
          )}

        </Container>
      </div>
    </div>
  );
};


const Card = ({ className, children }) => {
  return (
    <div className={`max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-800 dark:text-white py-2 ${className}`}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }) => {
  return (
    <p className={`text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm ${className}`}>
      {children}
    </p>
  );
};

const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
  return (
    <div className={`h-[15rem] md:h-[20rem] rounded-xl z-40 ${className} ${showGradient && "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"}`}>
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div className={`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] ${className}`}>
      {children}
    </div>
  );
};

const Db = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 105.07 122.88"
    style={{
      enableBackground: "new 0 0 105.07 122.88",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {".st0{fill-rule:evenodd;clip-rule:evenodd;}"}
    </style>
    <g>
      <path
        className="st0"
        d="M52.53,0c28.87,0,52.27,10.96,52.27,24.46c0,13.51-23.41,24.46-52.27,24.46c-28.86,0-52.27-10.96-52.27-24.46 C0.26,10.96,23.67,0,52.53,0L52.53,0z M0.26,81.83v18.78c9.3,33.03,101.18,26.65,104.55-1.69V80.16 C100.22,111.27,7.61,113.51,0.26,81.83L0.26,81.83L0.26,81.83z M0,32.94v18.34c9.3,32.26,101.69,27.9,105.07,0.23V33.18 C100.47,63.57,7.35,63.88,0,32.94L0,32.94z M0,56.64v18.78c9.3,33.03,101.69,28.57,105.07,0.23V56.89C100.47,88,7.35,88.32,0,56.64 L0,56.64z"
      />
    </g>
  </svg>
);

const MongoDb = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 598.88 1333.33"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <g fillRule="nonzero">
      <path
        d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
        fill="#599636"
      />
      <path
        d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
        fill="#6cac48"
      />
      <path
        d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
        fill="#c2bfbf"
      />
    </g>
  </svg>
);

const DataTable = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 438.76"
      className={className}
    >
      <path d="M61.42 0h338.91c33.78 0 61.42 27.65 61.42 61.42V178.3c-2.65-.26-5.31-.34-7.96-.22-1.79.05-3.59.2-5.4.44-10.99 1.52-22.13 6.81-30.32 14.38H242.91v87.19h83.02l-27.87 26.32h-55.15v87.19h9.12l-6.73 34.81H61.42C27.65 428.41 0 400.77 0 366.98V61.42C0 27.64 27.64 0 61.42 0zm303.35 428.24-72.14 10.52 14.58-75.31 57.56 64.79zm-33.7-86.51L450.8 228.58c2.23-2.19 6.19-3.1 8.3-.83l51.52 55.84c2.31 2.56 1.54 6.26-.96 8.62L388.57 406.56l-57.5-64.83zM30.13 306.41h186.46v87.19H30.13v-87.19zm0-227.01h186.46v87.18H30.13V79.4zm0 113.5h186.46v87.19H30.13V192.9zM242.91 79.4h186.47v87.18H242.91V79.4z" />
    </svg>
  );
};


const CsvLogo = ({ className }) => {
  return (
    <svg
      version="1.1"
      id="Livello_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
      className={className}
    >
      <style type="text/css">
        {`.st0{fill:#185C37;}
          .st1{fill:#21A366;}
          .st2{fill:#107C41;}
          .st3{opacity:0.1;enable-background:new ;}
          .st4{opacity:0.2;enable-background:new ;}
          .st5{fill:url(#SVGID_1_);}
          .st6{fill:#FFFFFF;}
          .st7{fill:#33C481;}`}
      </style>
      <path
        className="st0"
        d="M321.49,244.09l-202.42-35.72v263.94c0,12.05,9.77,21.83,21.83,21.83l0,0h349.28 c12.05,0,21.83-9.77,21.83-21.83l0,0v-97.24L321.49,244.09z"
      />
      <path
        className="st1"
        d="M321.49,17.86H140.9c-12.05,0-21.83,9.77-21.83,21.83l0,0v97.24L321.49,256l107.16,35.72L512,256V136.93 L321.49,17.86z"
      />
      <path
        className="st2"
        d="M119.07,136.93h202.42V256H119.07V136.93z"
      />
      <path
        className="st3"
        d="M263.94,113.12H119.07v297.67h144.87c12.04-0.04,21.79-9.79,21.83-21.83V134.94 C285.73,122.9,275.98,113.16,263.94,113.12z"
      />
      <path
        className="st4"
        d="M252.04,125.02H119.07V422.7h132.97c12.04-0.04,21.79-9.79,21.83-21.83V146.85 C273.82,134.81,264.07,125.06,252.04,125.02z"
      />
      <path
        className="st4"
        d="M252.04,125.02H119.07v273.86h132.97c12.04-0.04,21.79-9.79,21.83-21.83V146.85 C273.82,134.81,264.07,125.06,252.04,125.02z"
      />
      <path
        className="st4"
        d="M240.13,125.02H119.07v273.86h121.06c12.04-0.04,21.79-9.79,21.83-21.83V146.85 C261.91,134.81,252.17,125.06,240.13,125.02z"
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="45.5065"
        y1="-1464.0308"
        x2="216.4467"
        y2="-1167.9695"
        gradientTransform="matrix(1 0 0 1 0 1572)"
      >
        <stop offset="0" style={{ stopColor: "#18884F" }} />
        <stop offset="0.5" style={{ stopColor: "#117E43" }} />
        <stop offset="1" style={{ stopColor: "#0B6631" }} />
      </linearGradient>
      <path
        className="st5"
        d="M21.83,125.02h218.3c12.05,0,21.83,9.77,21.83,21.83v218.3c0,12.05-9.77,21.83-21.83,21.83H21.83 C9.77,386.98,0,377.21,0,365.15v-218.3C0,134.79,9.77,125.02,21.83,125.02z"
      />
      <path
        className="st6"
        d="M67.6,326.94l45.91-71.14l-42.07-70.75h33.84l22.96,45.25c2.12,4.3,3.57,7.49,4.36,9.6h0.3 c1.51-3.43,3.1-6.76,4.76-9.99l24.54-44.83h31.07l-43.14,70.33l44.23,71.54H161.3l-26.52-49.66c-1.25-2.11-2.31-4.33-3.17-6.63 h-0.39c-0.78,2.25-1.81,4.41-3.07,6.43l-27.3,49.87L67.6,326.94L67.6,326.94z"
      />
      <path
        className="st7"
        d="M490.17,17.86H321.49v119.07H512V39.69C512,27.63,502.23,17.86,490.17,17.86L490.17,17.86z"
      />
      <path
        className="st2"
        d="M321.49,256H512v119.07H321.49V256z"
      />
    </svg>
  );
};


const ClaudeLogo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      className={className}
    >
      <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
      <path
        fill="#1F1F1E"
        fillRule="nonzero"
        d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
      />
    </svg>
  );
};

export const OpenAILogo = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const GeminiLogo = ({ className }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
        fill="url(#prefix__paint0_radial_980_20147)"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_980_20147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
        >
          <stop offset=".067" stop-color="#9168C0" />
          <stop offset=".343" stop-color="#5684D1" />
          <stop offset=".672" stop-color="#1BA1E3" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const MetaIconOutline = ({ className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 287.56 191"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="62.34"
          y1="101.45"
          x2="260.34"
          y2="91.45"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0064e1" />
          <stop offset="0.4" stop-color="#0064e1" />
          <stop offset="0.83" stop-color="#0073ee" />
          <stop offset="1" stop-color="#0082fb" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="41.42"
          y1="53"
          x2="41.42"
          y2="126"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0082fb" />
          <stop offset="1" stop-color="#0064e0" />
        </linearGradient>
      </defs>
      <path
        fill="#0081fb"
        d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"
      />
      <path
        fill="url(#linear-gradient)"
        d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"
      />
      <path
        fill="url(#linear-gradient-2)"
        d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"
      />
    </svg>
  );
};

const AiLogo = (props) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 119.25 122.88"
    {...props}
  >
    <title>{"neuromorphic-computing"}</title>
    <path d="M86.28,104.11a4,4,0,0,0-3,0A3.93,3.93,0,0,0,82,105l0,0a4.57,4.57,0,0,0-.54.69,2.82,2.82,0,0,0-.23.42H74.88v-5.49a14.11,14.11,0,0,1-3,1l-.53.09v6.15a1.78,1.78,0,0,0,1.77,1.77h8.14l.21.35a3.87,3.87,0,0,0,.48.59l0,0a3.79,3.79,0,0,0,1.29.86,3.84,3.84,0,0,0,3,0h0a3.89,3.89,0,0,0,1.29-.86,3.94,3.94,0,0,0,.86-1.29,4,4,0,0,0,.3-1.51,4,4,0,0,0-2.45-3.67ZM40.22,86.66A10.24,10.24,0,0,1,37,86.1a13.54,13.54,0,0,1-5.77-4,13.11,13.11,0,0,1-3.14-6.77,12.35,12.35,0,0,1,.2-4.51,14.51,14.51,0,0,1-2.9-3.39A12.1,12.1,0,0,1,23.5,61a11.62,11.62,0,0,1,2.35-6.8,16.47,16.47,0,0,1,4-3.78c0-.53,0-1,0-1.56A14.34,14.34,0,0,1,33,40.26a11.21,11.21,0,0,1,6.93-4.14l.3,0a8.77,8.77,0,0,1,.42-1.52,10.65,10.65,0,0,1,4.63-5.39,10.15,10.15,0,0,1,7.1-1.25,10,10,0,0,1,6.68,5.2,9.64,9.64,0,0,1,13.21-4.26,11,11,0,0,1,4.66,4.48,9.34,9.34,0,0,1,1,2.71,10,10,0,0,1,3.8.54,13.51,13.51,0,0,1,5.88,4.09,13.11,13.11,0,0,1,3.08,7,12.72,12.72,0,0,1-.25,4.14,15,15,0,0,1,3.18,3.77l.07.15A11.84,11.84,0,0,1,95.28,62,11.47,11.47,0,0,1,93,68.5a16.26,16.26,0,0,1-4.12,3.82,14.55,14.55,0,0,1-2.5,9.22,11.48,11.48,0,0,1-7.56,5,10.63,10.63,0,0,1-4.32,6.3,10.83,10.83,0,0,1-9,1.89,9.4,9.4,0,0,1-6.1-5.54,10.16,10.16,0,0,1-7,5.73A10.3,10.3,0,0,1,44,92.86l-.13-.11a10,10,0,0,1-3.69-6.09ZM61.3,37.07V83.48a1.84,1.84,0,0,1,.43.91c.7,4.22,2.56,6.26,4.68,6.84a7.18,7.18,0,0,0,5.91-1.34,6.56,6.56,0,0,0,3-5c0-2.2-1.55-4.67-5.73-6.8a1.83,1.83,0,1,1,1.66-3.26c4.56,2.33,6.81,5.2,7.49,8a8,8,0,0,0,4.6-3.39,11,11,0,0,0,1.78-7.73l0-.13A1.84,1.84,0,0,1,86,69.79a13.36,13.36,0,0,0,4-3.47,7.82,7.82,0,0,0,1.6-4.44,8.17,8.17,0,0,0-1.12-4.3l-.08-.12A11.76,11.76,0,0,0,87.29,54a1.84,1.84,0,0,1-.71-2.11A8.89,8.89,0,0,0,87,48.09a9.5,9.5,0,0,0-2.23-5,9.88,9.88,0,0,0-4.26-3,6.21,6.21,0,0,0-2.66-.34h-.08a10.33,10.33,0,0,1-2.18,4.08,1.82,1.82,0,1,1-2.79-2.35,5.49,5.49,0,0,0,.88-6.39,7.17,7.17,0,0,0-3.08-2.94,6.31,6.31,0,0,0-4.12-.63c-2,.42-4,2.09-5.2,5.56ZM57.63,83.55V39.33h0l0,0h0l-.05-.07h0l0,0h0l0-.07h0l0-.08h0l0,0h0v0h0v0h0v0h0v0h0v-.08h0v-.11c-1.12-4.54-3.34-6.63-5.65-7.11a6.42,6.42,0,0,0-4.51.84,7,7,0,0,0-3,3.48c-.72,1.94-.31,4.31,2.08,6.53A1.83,1.83,0,0,1,43.68,45a10.9,10.9,0,0,1-3.33-5.28,7.56,7.56,0,0,0-4.53,2.82A10.77,10.77,0,0,0,33.46,49a12.65,12.65,0,0,0,.11,2.1,1.82,1.82,0,0,1-.85,1.81,13.67,13.67,0,0,0-3.92,3.46A8,8,0,0,0,27.16,61a8.47,8.47,0,0,0,1.32,4.52,11.41,11.41,0,0,0,2.92,3.14,1.85,1.85,0,0,1,.69,2.09,8.86,8.86,0,0,0-.41,4.09A9.6,9.6,0,0,0,34,79.75a9.87,9.87,0,0,0,4.18,2.88A6.25,6.25,0,0,0,40.4,83c.77-2.89,3.11-5.81,7.74-8.18a1.83,1.83,0,0,1,1.67,3.26c-4.4,2.24-6.06,4.87-6.06,7.19a6.15,6.15,0,0,0,2.43,4.63l.11.07a6.68,6.68,0,0,0,5.34,1.41c2.32-.48,4.54-2.58,5.66-7.13a1.66,1.66,0,0,1,.34-.69ZM40.91,50.46a1.83,1.83,0,0,1,2.56,2.61,10.76,10.76,0,0,0-3.23,7.28,11.8,11.8,0,0,0,2.64,7.86A1.83,1.83,0,1,1,40,70.5a15.4,15.4,0,0,1-3.44-10.29,14.44,14.44,0,0,1,4.32-9.75ZM73.34,52a1.83,1.83,0,0,1,2.15-3q.67.49,1.26,1a14.44,14.44,0,0,1,4.76,9.61,15.3,15.3,0,0,1-2.93,10.25,14.46,14.46,0,0,1-1.06,1.31,1.83,1.83,0,1,1-2.72-2.45,12.93,12.93,0,0,0,.82-1,11.75,11.75,0,0,0,2.24-7.81,10.81,10.81,0,0,0-3.56-7.18,10.43,10.43,0,0,0-1-.77ZM47.81,104.84v-2.91a12,12,0,0,1-2.32-.35c-.42-.11-.82-.23-1.22-.37v1.86H39.05c-.07-.14-.15-.27-.23-.4a4.22,4.22,0,0,0-.53-.67h0a3.94,3.94,0,0,0-1.29-.86,4,4,0,0,0-1.51-.3A3.92,3.92,0,0,0,32.71,102l0,0a4.22,4.22,0,0,0-.86,1.29,4,4,0,0,0-.3,1.52,3.9,3.9,0,0,0,.31,1.52,3.8,3.8,0,0,0,.83,1.25l0,0a3.79,3.79,0,0,0,1.26.85h0a4,4,0,0,0,3,0,4,4,0,0,0,1.26-.83l0,0a4.14,4.14,0,0,0,.52-.64c.07-.11.15-.24.21-.36h7a1.78,1.78,0,0,0,1.77-1.77Zm8.54,13.87V98.55A12.62,12.62,0,0,1,55,99.7,11,11,0,0,1,52.81,101V117H41.26l-.18-.3a4.08,4.08,0,0,0-.46-.54,3.79,3.79,0,0,0-1.29-.86,3.86,3.86,0,0,0-3,0,3.79,3.79,0,0,0-1.29.86,3.94,3.94,0,0,0-.86,1.29,3.84,3.84,0,0,0-.3,1.51,3.89,3.89,0,0,0,.3,1.52,4,4,0,0,0,.86,1.29,3.94,3.94,0,0,0,1.29.86,4,4,0,0,0,1.51.3,3.88,3.88,0,0,0,1.49-.29h0a4,4,0,0,0,1.29-.86,4.41,4.41,0,0,0,.59-.76,3.62,3.62,0,0,0,.25-.48H54.58a1.78,1.78,0,0,0,1.77-1.77ZM66,115.35v-14a10.37,10.37,0,0,1-3.52-1.91l0,0v15.93l-.39.22a4.7,4.7,0,0,0-.65.53,3.94,3.94,0,0,0-.86,1.29,4,4,0,0,0-.3,1.51,3.92,3.92,0,0,0,.29,1.49v0a4,4,0,0,0,5.18,2.15,3.94,3.94,0,0,0,1.29-.86,4,4,0,0,0,1.17-2.81,4.06,4.06,0,0,0-.29-1.48l0,0a3.79,3.79,0,0,0-.86-1.29,3.44,3.44,0,0,0-.62-.51l0,0c-.12-.08-.25-.15-.38-.22ZM18,73.67h3.3a16.15,16.15,0,0,0-.2,1.94c0,.54,0,1.07,0,1.6H19.81v5.22l.4.22a5,5,0,0,1,.67.54h0a4,4,0,0,1,.86,4.32,4.12,4.12,0,0,1-.83,1.26l0,0a4,4,0,0,1-1.29.86,4,4,0,0,1-3,0,4,4,0,0,1-1.26-.84l0,0a4,4,0,0,1-.85-1.26v0a3.89,3.89,0,0,1-.3-1.52,4,4,0,0,1,1.13-2.77l0,0a3.63,3.63,0,0,1,.64-.52c.11-.08.24-.15.36-.22v-7a1.78,1.78,0,0,1,.52-1.25A1.75,1.75,0,0,1,18,73.67ZM4.17,65.13H16.4A15.8,15.8,0,0,0,18,68.62h0l0,0H5.93V80.21l.3.19a3.45,3.45,0,0,1,.54.46,4,4,0,0,1,1.17,2.8,4,4,0,0,1-1.17,2.81,4.11,4.11,0,0,1-1.29.86,4,4,0,0,1-1.51.3,4.08,4.08,0,0,1-1.52-.3,4.22,4.22,0,0,1-1.29-.86A4.16,4.16,0,0,1,.3,85.18,4.08,4.08,0,0,1,0,83.66a4,4,0,0,1,.29-1.49v0a4,4,0,0,1,.86-1.28,3.61,3.61,0,0,1,.76-.59A2.73,2.73,0,0,1,2.4,80V66.89a1.76,1.76,0,0,1,1.77-1.76Zm3.36-9.68h9.4c-.17.36-.31.73-.44,1.09A14.43,14.43,0,0,0,15.9,59H7.53a3.61,3.61,0,0,1-.22.39,3.76,3.76,0,0,1-.53.65,3.79,3.79,0,0,1-1.29.86,3.84,3.84,0,0,1-1.51.3,3.88,3.88,0,0,1-1.49-.29h0A3.89,3.89,0,0,1,1.17,60a3.94,3.94,0,0,1-.86-1.29,4,4,0,0,1,0-3,3.94,3.94,0,0,1,.86-1.29A4,4,0,0,1,4,53.25a3.87,3.87,0,0,1,1.48.29h0A3.92,3.92,0,0,1,7.29,55l0,0c.08.13.15.26.22.39ZM18.77,35.2a4,4,0,0,1,.3,1.51,4,4,0,0,1-.3,1.52,3.82,3.82,0,0,1-.84,1.25l0,0a4.63,4.63,0,0,1-.69.55,4.16,4.16,0,0,1-.42.23V46.6h6.55v.31c0,.24,0,.49,0,.75a.67.67,0,0,1-.27.58,21.78,21.78,0,0,0-2.33,1.9H15a1.78,1.78,0,0,1-1.77-1.76V40.23a2.5,2.5,0,0,1-.35-.21,4.51,4.51,0,0,1-.59-.47l0,0a4,4,0,0,1-.86-1.29,3.86,3.86,0,0,1-.31-1.52,4.16,4.16,0,0,1,.29-1.49l0,0a3.85,3.85,0,0,1,.86-1.28,3.79,3.79,0,0,1,1.29-.86,3.85,3.85,0,0,1,1.51-.31,4,4,0,0,1,2.81,1.17,4.11,4.11,0,0,1,.86,1.29ZM69.6,18v2.74c.37,0,.73,0,1.09.1a12.06,12.06,0,0,1,2.45.62V19.81h5.23a3.11,3.11,0,0,0,.22.4,5,5,0,0,0,.54.67h0a3.94,3.94,0,0,0,1.29.86,4,4,0,0,0,1.51.3,4.08,4.08,0,0,0,1.52-.3,4.12,4.12,0,0,0,1.26-.83l0,0a4,4,0,0,0,.86-4.33,4.15,4.15,0,0,0-.84-1.26l0,0a3.79,3.79,0,0,0-1.26-.85h0a3.8,3.8,0,0,0-1.51-.3,3.89,3.89,0,0,0-1.52.3,4,4,0,0,0-1.26.83l0,0a3.59,3.59,0,0,0-.51.64c-.08.11-.15.24-.22.36h-7A1.78,1.78,0,0,0,69.6,18ZM61.06,4.17v20a12.87,12.87,0,0,1,1.51-1.3,11.16,11.16,0,0,1,2-1.16V5.93H76.15c.06.1.12.2.19.3a4,4,0,0,0,.45.54,3.89,3.89,0,0,0,1.29.86,3.95,3.95,0,0,0,4.32-.86,3.79,3.79,0,0,0,.86-1.29A3.85,3.85,0,0,0,83.57,4a3.9,3.9,0,0,0-.31-1.52,3.89,3.89,0,0,0-.86-1.29A3.94,3.94,0,0,0,81.11.3,4,4,0,0,0,79.6,0a3.92,3.92,0,0,0-1.49.29h0a4.16,4.16,0,0,0-1.29.86,4.41,4.41,0,0,0-.59.76A5.39,5.39,0,0,0,76,2.4H62.83a1.78,1.78,0,0,0-1.77,1.77ZM51.39,7.53V21.19a11,11,0,0,1,3.41,1.66l.11.08a.28.28,0,0,0,0-.09V7.53l.39-.22A4.18,4.18,0,0,0,56,6.78a3.94,3.94,0,0,0,.86-1.29A4,4,0,0,0,57.12,4a3.88,3.88,0,0,0-.29-1.49v0A4,4,0,0,0,51.64.31a3.94,3.94,0,0,0-1.29.86,4,4,0,0,0-.86,1.29A3.85,3.85,0,0,0,49.19,4a3.87,3.87,0,0,0,.29,1.48v0a3.79,3.79,0,0,0,.86,1.29,3.44,3.44,0,0,0,.62.51l0,0a3.61,3.61,0,0,0,.39.22ZM31.13,18.77a4,4,0,0,0,3,0,3.82,3.82,0,0,0,1.25-.84l0,0a4.57,4.57,0,0,0,.54-.69,2.82,2.82,0,0,0,.23-.42h6.32v5.45A12.68,12.68,0,0,1,46.08,21V15a1.78,1.78,0,0,0-1.77-1.77H36.17L36,12.92a3.87,3.87,0,0,0-.48-.59l0,0a3.79,3.79,0,0,0-1.29-.86,3.85,3.85,0,0,0-1.51-.31,4.12,4.12,0,0,0-1.49.29l0,0a4,4,0,0,0-1.29.86A3.94,3.94,0,0,0,29,13.59a4,4,0,0,0-.3,1.51,4.08,4.08,0,0,0,.3,1.52,4,4,0,0,0,2.15,2.15ZM101.21,49H96.68a14.88,14.88,0,0,0,.23-2c0-.53,0-1,0-1.57h2.54V40.28a4.47,4.47,0,0,1-1.07-.76h0a3.85,3.85,0,0,1-.86-1.28,3.89,3.89,0,0,1-.3-1.52,4,4,0,0,1,1.13-2.77l0,0a3.79,3.79,0,0,1,1.29-.86,3.85,3.85,0,0,1,1.51-.31,3.91,3.91,0,0,1,1.53.31,3.77,3.77,0,0,1,1.25.84l0,0a4.24,4.24,0,0,1,.85,1.26v0a4,4,0,0,1,0,3,4.12,4.12,0,0,1-.83,1.26l0,0a4.14,4.14,0,0,1-.64.52c-.12.07-.24.15-.37.21v7a1.75,1.75,0,0,1-.51,1.25,1.78,1.78,0,0,1-1.25.52Zm13.87,8.54H101.81a15.56,15.56,0,0,0-1.42-3.25l0,0-.15-.26h13.1V42.49l-.3-.18a5,5,0,0,1-.55-.46,4.11,4.11,0,0,1-.86-1.29,4,4,0,0,1,0-3,4.11,4.11,0,0,1,.86-1.29,4,4,0,0,1,4.32-.86A4,4,0,0,1,119,37.53a4,4,0,0,1,0,3l0,0a3.79,3.79,0,0,1-.86,1.29,4,4,0,0,1-.75.59,3.62,3.62,0,0,1-.48.25V55.81a1.78,1.78,0,0,1-1.77,1.77Zm-3.36,9.68H101.17c.18-.39.34-.79.48-1.18a12.58,12.58,0,0,0,.6-2.36h9.47c.07-.13.14-.26.22-.38a4.2,4.2,0,0,1,.52-.66,4.35,4.35,0,0,1,1.29-.86,4,4,0,0,1,3,0h0A4,4,0,0,1,118.94,64a4.08,4.08,0,0,1,.3,1.52,3.93,3.93,0,0,1-.31,1.52,4,4,0,0,1-.85,1.28,4.12,4.12,0,0,1-1.3.87,4,4,0,0,1-1.51.3,4.16,4.16,0,0,1-1.49-.29h0a4.19,4.19,0,0,1-1.29-.87,3.87,3.87,0,0,1-.5-.62l0,0c-.08-.12-.15-.25-.22-.38ZM100.48,87.51a4,4,0,0,1,0-3,3.93,3.93,0,0,1,.84-1.25l0,0a4,4,0,0,1,.68-.54l.42-.23V76.11H94.68c0-.41,0-.83,0-1.24a.66.66,0,0,1,.28-.6,21.88,21.88,0,0,0,2.19-1.71h7.07A1.78,1.78,0,0,1,106,74.33v8.14l.36.21a3.87,3.87,0,0,1,.59.48l0,0a3.94,3.94,0,0,1,.86,1.29,3.84,3.84,0,0,1,.3,1.51,3.88,3.88,0,0,1-.29,1.49v0a4,4,0,0,1-2.15,2.15,4,4,0,0,1-3,0,4,4,0,0,1-2.15-2.15Z" />
  </svg>
);


