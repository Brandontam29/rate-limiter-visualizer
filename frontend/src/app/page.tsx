import Heading from "@/components/atoms/Heading";
import Visualizer from "@/components/organisms/Visualizer";
import useCookie from "@/hooks/useCookie";
import Controls from "@/sections/Controls";
import UploadUser from "@/sections/UploadUser";

const HomePage = () => {
  const [cookie] = useCookie("sessionCookie");

  return (
    <div className="mx-auto container px-2 flex gap-2">
      <UploadUser />
      <section>
        <Heading tag={"h1"} size="size-2xl">
          Visualizer
        </Heading>

        <Visualizer requests={[]} />
      </section>

      <Controls />
    </div>
  );
};

export default HomePage;
