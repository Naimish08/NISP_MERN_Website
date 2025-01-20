import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { NISPInfo } from '../components/NISPInfo';
import { AboutUs } from '../components/AboutUs';
import { FacultyMentors } from '../components/FacultyMentors';
import { TeamGrid } from '../components/TeamGrid';
import {Footer} from '../components/Footer';

export function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <NISPInfo />
      <AboutUs />
      <FacultyMentors />
      <TeamGrid />
       <Footer />
    </div>
  );
}