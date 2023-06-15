import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import getHelloWorld from "@/fetchers/getHelloWorld";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";
import { useQuery } from "react-query";

const HomePage = () => {
  const { data: helloWorldData } = useQuery({
    queryKey: ["getHelloWorld"],
    queryFn: getHelloWorld,
  });

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
        <li>helloWorldData: {helloWorldData ?? "none"}</li>
      </ul>
    </div>
  );
};

export default HomePage;
