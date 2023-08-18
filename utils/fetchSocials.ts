import { Social } from "../typings"


export const fetchSocials = async() => {
    const res = await fetch(`https://portfolio-ucog.vercel.app/api/getExperiencev/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    
    return socials;
}
