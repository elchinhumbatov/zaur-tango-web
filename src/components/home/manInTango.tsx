import { Suspense } from "react";
import SectionTitle from "./title";
import StorageVideo, { StorageVideoPlaceholder } from "../StorageVideo";

const videoStoragePath = "video/tango-in-man.mp4";

export default function HomeManInTango() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <SectionTitle
          heading="Tango in Man"
          subheading="A man in tango is not there to dominate.
            And not to perform strength.
            He is there to hold a center.
            Movement begins when his presence settles.
            When his body listens before it acts.
            When intention arrives before motion.
            He doesn’t lead with technique.
            He leads with attention.
            With breath.
            With the quality of his stillness.
            There is no force in this kind of leading.
            Only clarity.
            When a man dances this way, a woman feels it instantly.
            Nothing is taken from her.
            Nothing is demanded.
            There is space.
            Tango matures a man.
            It teaches him restraint, sensitivity, responsibility.
            It teaches him how to guide without control.
            And slowly, he becomes something rare:
            a man whose presence is enough.
            A center that doesn’t insist —
            and therefore is chosen."
          url=""
          btnTitle=""
        />
        <Suspense fallback={<StorageVideoPlaceholder />}>
          <StorageVideo storagePath={videoStoragePath} />
        </Suspense>
      </div>
    </section>
  );
}
