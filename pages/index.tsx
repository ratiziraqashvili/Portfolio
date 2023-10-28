import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { Experience, Project, Skill, Social } from '@/typings'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'

type Props = {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}




const Home = ({ experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[rgba(36,36,36)] text-white h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 pb-56'>
      <Head>
        <title>Rati Ziraqashvili - Portfolio</title>
        <link rel="icon" href="/mainlogorz.png" /> 
      </Head>

      <Header socials={socials} />

        <section className='snap-start' id='hero'>
          <Hero  />
        </section>

        <section id='about' className='snap-center'>
          <About  />
        </section>

        <section id='experience' className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>

        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>

        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        <section id="contact" className=''>
          <ContactMe />
        </section>

    </div>
  )
  }

  export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try{
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    }as GetStaticPropsResult<Props>;;
  } catch (error){
    console.error("error:", error);
    return{
      props: {
        experiences: [],
        skills: [],
        projects: [],
        socials: [],
      },
      revalidate: 10,
    };
  };
};
 