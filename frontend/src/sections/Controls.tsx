import Heading from "@/components/atoms/Heading";
import Icon from "@/components/atoms/Icon";
import RadioCardGroup from "@/components/atoms/RadioCardGroup";
import Toggle from "@/components/atoms/Toggle";
import { doInfiniteQueryAtom, rateLimiterTypeAtom } from "@/state/controls";
import { useAtom } from "jotai";

const RATE_LIMITER_OPTIONS = [
  {
    label: "Bucket Algorithm",
    value: "bucket",
  },
  {
    label: "Token Algorithm",
    value: "token",
  },
  {
    label: "Sliding Window Algorithm",
    value: "sliding-window",
  },
] as const;

type ControlsProps = { onClose: () => void };

const Controls = ({ onClose }: ControlsProps) => {
  const [doInfiniteQuery, setDoInfiniteQuery] = useAtom(doInfiniteQueryAtom);
  const [rateLimiterType, setRateLimiterType] = useAtom(rateLimiterTypeAtom);

  // console.log({ doInfiniteQuery, rateLimiterType });
  return (
    <section className="space-y-2 bg-background-level-1 p-8">
      <div className="flex justify-between">
        <Heading tag={"h1"} size="size-2xl">
          Controls
        </Heading>
        <button type="button" onClick={onClose}>
          <span className="sr-only">Close Controls</span>
          <Icon name={"XMarkIcon"} />
        </button>
      </div>

      <div>
        <Heading tag="h3">Infinite Query</Heading>
        <Toggle value={doInfiniteQuery} onToggle={setDoInfiniteQuery} />
      </div>

      <div>
        <Heading tag="h3">Rate Limiter Type</Heading>
        <RadioCardGroup<typeof RATE_LIMITER_OPTIONS>
          label="Rate Limiter Type"
          options={RATE_LIMITER_OPTIONS}
          value={rateLimiterType}
          onChange={(type) => setRateLimiterType(type)}
        />
      </div>
    </section>
  );
};

export default Controls;
