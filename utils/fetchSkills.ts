import { Skill } from "../typings"

let BASE_URL = '';
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3000'; 
  }

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills
}
