import Image from 'next/image';
import HeroSection from '@/section/(root)/about/Hero';
import MissionAndVission from '@/section/(root)/about/VisionMission';
import OurApproch from '@/section/(root)/about/OurApproch';
import OurPriority from '@/section/(root)/about/OurPriority';
import Testimonials from '@/section/(root)/about/Testimonials';
// import Team from '@/section/about/team';

const About = () => {
    return (
        <main className='space-y-6 mt-6'>
            <HeroSection />
            <OurPriority />
            <MissionAndVission />
            <OurApproch />
            <Testimonials />
            {/* <Team /> */}
        </main>
    )
}

export default About
