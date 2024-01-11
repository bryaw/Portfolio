import Image from 'next/image';
import HomeSection from './components/HomeSection';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navigation />
      <div class="container mx-auto px-12 py-4 mt-40">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  )
}