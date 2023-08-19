import { Project } from "../typings"

let BASE_URL = '';
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3000'; 
  }

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
}
