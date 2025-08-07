import React from 'react'
import Header from './Pages/Layout/Header'
import Home from './Pages/Home'
import AdmissionSection from './Pages/Owerspage'
import AboutSection from './Pages/Aboutsection'
import MissionVision from './Pages/Ourmissionvision'
import SocialSidebar from './Pages/Floatingicon'
import Testimonial21 from './Pages/Testimonial'
import Footer from './Pages/Layout/Footer'
import { CarouselDemo } from './Pages/Carousleimage'
import { Staffsection } from './Pages/Staffsection'
import CourseCarousel from './Pages/ProgramsAccordion'
import WhatsappFloatButton from './Pages/WhatsappFloatButton'
import { EnquiryFormModal } from './Pages/Enquiryform'


const App = () => {
  return (
    <div>
        <Header/>
        <Home/>

        <div className="relative z-10 -mt-20">
        <AdmissionSection />
      </div>
      <MissionVision/>

      <AboutSection/>
      <CourseCarousel/>
      <SocialSidebar/>
      <CarouselDemo/>
      <Staffsection/>
      <Testimonial21/>
      <WhatsappFloatButton/>
      <EnquiryFormModal/>

      <Footer/>
    </div>
  )
}

export default App
