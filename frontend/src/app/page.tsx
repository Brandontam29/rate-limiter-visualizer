import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import useCookie from "@/hooks/useCookie";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";

const HomePage = () => {
  const [cookie] = useCookie("sessionCookie");

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
        <ul>
          <li>Cookie: {cookie ? cookie : "none"}</li>
        </ul>
      </div>
      <Controls />
    </div>
  );
};

export default HomePage;
