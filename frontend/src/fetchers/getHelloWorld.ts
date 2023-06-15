import ENDPOINT from "@/fetchers/endpoint";

const getHelloWorld = async () => {
  try {
    const res = await fetch(`${ENDPOINT}/hello-world`, {
      method: "GET",
      headers: {
        Cookies: "hello=world 123",
      },
    });

    const data = await res.text();

    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getHelloWorld;
