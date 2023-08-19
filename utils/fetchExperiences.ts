import { Experience } from "../typings"

let BASE_URL = '';
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3000'; 
  }

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    
    return experiences;
};
