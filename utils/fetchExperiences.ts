import { Experience } from "../typings"

const url = 'http://localhost:3000/'

export const fetchExperiences = async() => {
    const res = await fetch(`http://localhost:3000/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    
    return experiences;
};
