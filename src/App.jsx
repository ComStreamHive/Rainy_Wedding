import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import AnnouncementSection from './Components/Announcement';
import ScrollingBanner from './Components/ScrollBanner';
import AboutSection from './Components/About';
import OurStory from './Components/OurStory';
import WeddingEvents from './Components/Itinerary';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AnnouncementSection />
      <ScrollingBanner />
      <AboutSection id="about" />
      <OurStory id="our-story" />
      <WeddingEvents id="itinerary" />
      <ScrollingBanner />
      <Gallery id="gallery" />
      <Footer />
    </>
  );
}

export default App;
