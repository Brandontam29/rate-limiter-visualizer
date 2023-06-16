import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import getCookies from "@/fetchers/getCookies";
import useCookie from "@/hooks/useCookie";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";
import { useQuery } from "react-query";

const HomePage = () => {
  const [cookie, setCookie] = useCookie("sessionCookie");

  return (
    <div className="mx-auto container px-2 flex gap-2">
      <div>
        <section>
          <Heading tag={"h1"} size="size-2xl">
            Visualizer
          </Heading>

          <Visualizer requests={[]} />
        </section>
        <UploadUser />
      </div>
      <Controls />
      <ul>
        <li>helloWorldData: {cookies ? cookies.sessionCookie : "none"}</li>
      </ul>
    </div>
  );
};

export default HomePage;
