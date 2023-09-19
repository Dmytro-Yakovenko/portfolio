import React, { useRef, useState } from "react";

import { StyledSwiper, StyledSwiperSlide, StyledSwiperWrapper, StyledText,StyledA, StyledH4  } from "./styled";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const slidesConfig = [
  {
    id:1,
    title:' Former Supervisor',
    name: "Roman Alexandrenko",
    position: "Senior Product Manager",
    company: "Gong",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  },
  {
    id:1,
    title:' Former Supervisor',
    name: "Roman Alexandrenko",
    position: "Senior Product Manager",
    company: "Gong",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  },
  {
    id:1,
    title:' Former Supervisor',
    name: "Roman Alexandrenko",
    position: "Senior Product Manager",
    company: "Gong",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  },
  {
    id:1,
    title:' Former Supervisor',
    name: "Roman Alexandrenko",
    position: "Senior Product Manager",
    company: "Gong",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  }, {
    id:1,
    title:' Former Supervisor',
    name: "Roman Alexandrenko",
    position: "Senior Product Manager",
    company: "Gong",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  }
]

const Swiper=()=>{


  return (
    <>
      <StyledSwiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slidesConfig.map(item=>(
         <StyledSwiperSlide>
          <StyledSwiperWrapper>
          <StyledH4>{item.title}</StyledH4> 
         <StyledText>{item.position}</StyledText>
         <StyledText>{item.company}</StyledText>
        <StyledA href={`mailto: ${item.email}`}>{item.email}</StyledA>
         <StyledText>{item.text}</StyledText>
          
          </StyledSwiperWrapper>
       

        </StyledSwiperSlide>))}
       
    
      </StyledSwiper>
    </>
  );
}
 export default Swiper