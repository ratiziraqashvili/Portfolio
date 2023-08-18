import { Skill } from "../typings"


export const fetchSkills = async() => {
    const res = await fetch(`https://portfolio-ucog.vercel.app/api/getExperience/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills
}
