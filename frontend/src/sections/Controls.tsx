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
    </section>
  );
};

export default Controls;
