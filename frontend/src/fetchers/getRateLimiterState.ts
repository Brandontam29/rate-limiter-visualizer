import url from "@/fetchers/url";

const getRateLimiterState = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default getRateLimiterState; 