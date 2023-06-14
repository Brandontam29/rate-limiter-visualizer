import Heading from "@/components/atoms/Heading";
import { UserType } from "@/sections/UploadUser";

type Request = {
  id: string;
  data: UserType;
  status:
    | "sending"
    | "received"
    | "pending"
    | "dismissed"
    | "success"
    | "error";
};

type VisualizerProps = {
  requests: Request[];
};

const Visualizer = ({ requests }: VisualizerProps) => {
  return (
    <div className="max-w-sm w-full relative">
      <div className="space-y-4">
        text that is not a heading
        {requests.map((request) => (
          <div key={request.id}>
            <Heading tag="h3" size="size-lg">
              Status: {request.status}
            </Heading>
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
