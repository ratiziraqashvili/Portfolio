import { Social } from "../typings"

let BASE_URL = '';
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3000'; 
  }

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}
