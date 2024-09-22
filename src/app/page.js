import Image from "next/image";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import ContactMe from "@/components/ContactMe";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
     <NavBar />
      <Hero/>
      <Projects/>
      <Education />
      <ContactMe />
      <WorkExperience/>
      
    </>
  );
}
