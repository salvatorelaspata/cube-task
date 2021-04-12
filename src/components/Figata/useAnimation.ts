import React from 'react';
export const useAnimation = ()=>{
const cardRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
     const sneakerRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
     const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
     const descriptionRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
     const sizesRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
     const purchaseRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

     const mousemove = (event: any) => {
          let xAxis = (window.innerWidth / 2 - event.screenX) / 25;
          let yAxis = (window.innerHeight / 2 - event.screenY) / 25;
          if (typeof cardRef.current === "object") {
               cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
          }
     };

     //Animate In
     const mouseenter = () => {
          cardRef.current.style.transform = "none";

          //Popout
          titleRef.current.style.transform = "translateZ(150px)";
          sneakerRef.current.style.transform = "translateZ(200px) rotateZ(-15deg)";
          descriptionRef.current.style.transform = "translateZ(125px)";
          sizesRef.current.style.transform = "translateZ(100px)";
          purchaseRef.current.style.transform = "translateZ(75px)";
     };

     //Animate Out
     const mouseLeave = () => {
          cardRef.current.style.transition = "all 0.5s ease";
          cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;

          //Popback
          titleRef.current.style.transform = "translateZ(0px)";
          sneakerRef.current.style.transform = "translateZ(0px) rotateZ(0deg)";
          descriptionRef.current.style.transform = "translateZ(0px)";
          sizesRef.current.style.transform = "translateZ(0px)";
          purchaseRef.current.style.transform = "translateZ(0px)";
     };

return {
     cardRef,
     sneakerRef,
     titleRef,
     descriptionRef,
     sizesRef,
     purchaseRef,
     mousemove,
     mouseenter,
     mouseLeave
}
}