import { Project } from "../typings"


export const fetchProjects = async () => {
    const res = await fetch(`https://portfolio-ucog.vercel.app/api/getExperience/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    console.log( "fetching" ,projects)

    return projects;
}
