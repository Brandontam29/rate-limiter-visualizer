import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";
import { requestsAtom } from "@/state/requests";
import { useAtomValue } from "jotai";

const HomePage = () => {
  const requests = useAtomValue(requestsAtom);

  return (
    <div className="py-4 lg:py-8 lg:px-8 mx-auto container px-2 grid gap-8 grid-cols-[300px_300px]">
      <UploadUser />

      <section>
        <Heading tag="h1" size="size-2xl">
          Visualizer
        </Heading>

        <Visualizer requests={requests} />
      </section>

      <div className="fixed top-0 bottom-0 right-0 bg-background-level-1">
        <Controls />
      </div>
    </div>
  );
};

export default HomePage;
