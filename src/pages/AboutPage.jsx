import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import VisionMission from '../components/AboutUs/VisionMission';
import OurTeams from '../components/AboutUs/OurTeams';
import FAQ from '../components/AboutUs/FAQ';

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <AboutUs />
      <VisionMission />
      <OurTeams />
      <FAQ />
    </div>
  );
};

export default AboutPage;
