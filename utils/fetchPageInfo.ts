import { PageInfo } from "../typings"


export const fetchPageInfo = async () => {
    const res = await fetch(
        "https://portfolio-ucog.vercel.app/api/getExperience/api/getPageInfo"
        );

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}
