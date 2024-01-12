"use client"
import React, { useEffect } from 'react';
import HomeSection from './components/HomeSection';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
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
      <div class="container mx-auto px-12 py-4 mt-40">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </div>
      <BackTopButton />
    </main>
  )
}
