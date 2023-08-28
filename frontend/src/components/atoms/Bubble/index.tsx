type BubbleProps = {
  json: Object;
};

const Bubble = ({ json }: BubbleProps) => {
  return (
    <div className="rounded-full aspect-square min-h-[120px] justify-center items-center text-black bg-orange-600 inline-flex p-8">
      <pre className="block whitespace-pre-wrap">
        {JSON.stringify(json, null, 2)}
      </pre>
    </div>
  );
};

export default Bubble;
