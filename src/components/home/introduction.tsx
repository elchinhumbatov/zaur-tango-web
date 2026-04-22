import { Suspense } from "react";
import StorageVideo, { StorageVideoPlaceholder } from "../StorageVideo";

const videoStoragePath = "video/introduction-horizontal.mp4";

export default function Introduction() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        {/* <SectionTitle
          heading="It is about presence, center, and connection."
          subheading=""
          url=""
          btnTitle=""
        /> */}
        <div className="w-full mt-8 mx-auto">
          <Suspense fallback={<StorageVideoPlaceholder />}>
            <StorageVideo
              storagePath={videoStoragePath}
              controls={true}
              loop={false}
              muted={false}
              autoPlay={false}
              poster="/img/video_placeholder.png"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
