import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { NISPInfo } from '../components/NISPInfo';
import { AboutUs } from '../components/AboutUs';
import { UpcomingEvents } from '../components/UpcomingEvents';
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
      <UpcomingEvents />
      <FacultyMentors />
      <TeamGrid />
       <Footer />
    </div>
  );
}