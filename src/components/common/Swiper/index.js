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
    company: "Boost Media",
    email: "romeus99@gmail.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  },
  {
    id:2,
    title:' Sales Manager',
    name: "Lena Gasparyan",
    position: "Sales Manager",
    company: "United Appliance Repair",
    email: "support@unitedhvacrepair.com",
    text:"I had the privilege of working alongside Dmytro on several front-end development projects, and I can attest to his outstanding skills and professionalism. Dmytro's expertise in HTML, CSS, and JavaScript was evident in every line of code he wrote. His ability to create visually stunning and highly responsive web applications left a lasting impression on our team and our clients. Dmytro's approach to development is not just about meeting project requirements but exceeding them. He has a deep understanding of user experience principles, and his contributions consistently resulted in web interfaces that not only met the technical criteria but also delighted our users. What sets Dmytro apart is his ability to collaborate effectively with designers, backend developers, and project managers, making him an indispensable member of any project team."
  },
  {
    id:3,
    title:'Manager',
    name: "Sergey",
    position: "Business Owner",
    company: "United Appliance Repair",
    email: "support@unitedhvacrepair.com",
    text:"I had the privilege of supervising Dmytro Yakovenko for two years during his tenure at XYZ Tech Solutions. Dmytro consistently displayed exceptional project management skills and a strong commitment to achieving our company's goals. His attention to detail, problem-solving abilities, and leadership qualities made him an invaluable member of our team."
  },
  {
    id:4,
    title:'co-worker',
    name: "Nadezhda Epina",
    position: "ui ux designer",
    company: "United Appliance Repair",
    email: "nadyepik@gmail.com",
    text:"Dmytro is not only a skilled front-end developer but also an innovative problem solver. I've had the privilege of witnessing his creative solutions to complex development challenges. When faced with technical hurdles, Dmytro consistently demonstrated an ability to think outside the box and devise innovative approaches that not only resolved the issues but also enhanced our overall development processes. His innovative mindset brought fresh perspectives to our projects and significantly contributed to their success. Dmytro's passion for staying updated with emerging technologies and his proactive adoption of best practices were evident in the forward-thinking solutions he implemented."
  }, {
    id:5,
    title:' Former co-worker',
    name: "Karen Grigoryan",
    position: "Quality Assurance Engineer",
    company: "Boost Media",
    email: "grigoryank@yahoo.com",
    text:"Dmytro's reliability and consistency in his work were qualities that set him apart. Throughout our collaboration, I observed his unwavering commitment to meeting project deadlines, conducting comprehensive QA testing, and delivering polished front-end code. Regardless of the project's complexity or pressure, Dmytro could always be counted on to deliver exceptional results. His work ethic and dedication to excellence not only set a high standard for our team but also inspired those around him. Dmytro's reliability was not just about meeting the minimum requirements; he consistently went above and beyond, elevating the quality of our deliverables."
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