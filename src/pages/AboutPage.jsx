import React from 'react';
import AboutUs from '../components/AboutUs';
import VisionMission from '../components/VisionMission';
import OurTeams from '../components/OurTeams';
import FAQ from '../components/FAQ';

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
