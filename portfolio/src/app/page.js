"use client"
import React, { useEffect } from 'react';
import HomeSection from './components/HomeSection';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackTopButton from './components/BackTopButton';

export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
      <Footer />
      <BackTopButton />
    </main>
  )
}
