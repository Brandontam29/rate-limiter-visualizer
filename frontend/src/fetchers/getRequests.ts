import ENDPOINT from "@/fetchers/endpoint";

const getRequests = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/requests`, { method: "GET" });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getRequests;
