import Heading from "@/components/atoms/Heading";
import Icon from "@/components/atoms/Icon";
import Visualizer from "@/components/organisms/Visualizer";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";
import { requestsAtom } from "@/state/requests";
import cxtw from "@/utils/cxtw";
import { useAtomValue } from "jotai";
import { useState } from "react";

const HomePage = () => {
  const requests = useAtomValue(requestsAtom);
  const [showControls, setShowControls] = useState(true);
  return (
    <div className="py-4 lg:py-8 lg:px-8 mx-auto container px-2 grid gap-8 grid-cols-[300px_300px]">
      <UploadUser />

      <section>
        <Heading tag="h1" size="size-2xl">
          Visualizer
        </Heading>

        <Visualizer requests={requests} />
      </section>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-[25px] hover:translate-x-[15px] p-2 transition-translate duration-500">
        <button
          type="button"
          onClick={() => setShowControls(true)}
          className="rounded-full w-12 aspect-square flex justify-center items-center border border-input-border shadow hover:shadow transition-shadow duration-500"
        >
          <span className="sr-only">Open Controls</span>
          <Icon name="ChevronLeftIcon" size="size-4.5" />
        </button>
      </div>
      <div
        className={cxtw(
          "fixed top-0 bottom-0 right-0 bg-background-level-1 transition-transform translate-x-full",
          showControls && "translate-x-0"
        )}
      >
        <Controls onClose={() => setShowControls(false)} />
      </div>
    </div>
  );
};

export default HomePage;
