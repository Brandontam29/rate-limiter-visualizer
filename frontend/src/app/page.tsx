import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";
import { requestsAtom } from "@/state/requests";
import { useAtomValue } from "jotai";

const HomePage = () => {
  const requests = useAtomValue(requestsAtom);

  return (
    <div className="mx-auto container px-2 flex gap-2">
      <UploadUser />
      <section>
        <Heading tag="h1" size="size-2xl">
          Visualizer
        </Heading>

        <Visualizer requests={requests} />
      </section>

      <Controls />
    </div>
  );
};

export default HomePage;
