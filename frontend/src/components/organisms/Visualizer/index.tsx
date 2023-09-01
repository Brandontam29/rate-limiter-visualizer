// import Heading from "@/components/atoms/Heading";
// import { UserType } from "@/sections/UploadUser";
import cxtw from "@/utils/cxtw";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// type Request = {
//   id: string;
//   data: UserType;
//   status:
//     | "sending"
//     | "received"
//     | "pending"
//     | "dismissed"
//     | "success"
//     | "error";
// };

type VisualizerProps = {
  requests: any[];
};

const Visualizer = ({ requests }: VisualizerProps) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  enableAnimations(true);
  return (
    <div className="max-w-sm w-full relative">
      <div ref={parent} className="flex flex-col-reverse space-y-4">
        {requests.map((request, i) => (
          <div
            key={request.id}
            className={cxtw(
              "border border- rounded-lg w-min p-4 aspect-square",
              i < requests.length - 7 && "hidden"
            )}
          >
            {/* <Heading tag="h3" size="size-lg">
              Status: {request.status}
            </Heading> */}
            <div>{request.data.firstName}</div>
            <div>{request.data.lastName}</div>
            <div>{request.data.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
