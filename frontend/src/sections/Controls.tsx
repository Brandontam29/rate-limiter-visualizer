import Heading from "@/components/atoms/Heading";
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

const Controls = () => {
  const [doInfiniteQuery, setDoInfiniteQuery] = useAtom(doInfiniteQueryAtom);
  const [rateLimiterType, setRateLimiterType] = useAtom(rateLimiterTypeAtom);

  console.log({ doInfiniteQuery, rateLimiterType });
  return (
    <section className="space-y-2 fixed top-0 bottom-0 right-0 bg-background-level-1 p-8">
      <Heading tag={"h1"} size="size-2xl">
        Controls
      </Heading>

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
