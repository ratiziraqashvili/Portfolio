import { Social } from "../typings"

const url = 'http://localhost:3000/'

export const fetchSocials = async() => {
    const res = await fetch(`http://localhost:3000/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    
    return socials;
}
