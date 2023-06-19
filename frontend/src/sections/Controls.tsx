import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import { doInfiniteQueryAtom } from "@/state/controls";
import { useAtom } from "jotai";

const Controls = () => {
  const [doInfiniteQuery, setDoInfiniteQuery] = useAtom(doInfiniteQueryAtom);

  return (
    <section className="container">
      <Heading tag={"h1"} size="size-2xl">
        Controls
      </Heading>

      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={doInfiniteQuery}
          onChange={(e) => {
            setDoInfiniteQuery(e.target.checked);
          }}
        />
      </div>
      <Button
        variant={"secondary"}
        size={"small"}
        onClick={() => {
          fetch("http://localhost:3002/set", {
            method: "GET",
            credentials: "include",
          })
            .then((response) => {
              // Check if the response has a 'Set-Cookie' header
              const setCookieHeader = response.headers.get("Set-Cookie");
              if (setCookieHeader) {
                // Parse the 'Set-Cookie' header to extract the cookie value
                const cookieValue = setCookieHeader.split(";")[0];

                // Set the extracted cookie value in your frontend
                document.cookie = cookieValue;
              }

              // Process the response
              // ...
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        Cookie API
      </Button>
    </section>
  );
};

export default Controls;
