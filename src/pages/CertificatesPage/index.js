import React from "react";
import { CertificateWrapper, CertificateImage, CertificateContainer } from "./style";
import { StyledMain, Container, Styledh2 } from "../../components/common/container/style";


const Skills = () => {
  return (
    <Container>
      <StyledMain>
        
        <CertificateWrapper >
           <Styledh2>Certificates</Styledh2>
           <CertificateContainer>

           <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694748786/SWE_PT_September_2022_Grad_-4_mcnaqq.png" alt="certificate App Academy"/>
             <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694658882/download_wstqgt.png" alt="certficate Hacker Rank Java Script Basic"/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694749241/download_2_zg7sba.png" alt="Hack Ranker Problem Solving Basic "/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694749392/download_3_lbazys.png" alt="Hack Ranker React Basic"/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1696516365/Certification_s1gyb4.png" alt="CODINGAME CERTIFICATE problem solving"/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1697254922/problem_solving_intermediate_certificate_gbuzld.png" alt="CODINGAME CERTIFICATE problem solving"/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1699940995/software_engineer_intern_certificate_xwfha5.png" alt="Software Engenier Intern"/>


           </CertificateContainer>
            
        </CertificateWrapper>
           
      </StyledMain>
    </Container>

   
  );
};

export default Skills;
