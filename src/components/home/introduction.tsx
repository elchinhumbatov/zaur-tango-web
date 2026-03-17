import { Suspense } from "react";
import StorageVideo, { StorageVideoPlaceholder } from "../StorageVideo";
import SectionTitle from "./title";

const videoStoragePath = "video/introduction.mp4";

export default function Introduction() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <SectionTitle
          heading="Welcome to Zaur Tango"
          subheading=""
          url=""
          btnTitle=""
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4 mt-8 mx-auto">
            <Suspense fallback={<StorageVideoPlaceholder />}>
              <StorageVideo storagePath={videoStoragePath} controls={true} />
            </Suspense>
          </div>
          <p className="w-full md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad
            aliquam, vero iusto ex repellat natus officia. Exercitationem, sunt
            iusto ipsa tenetur assumenda a saepe dolor ducimus quia reiciendis
            consectetur provident dolorem delectus neque nemo placeat officia,
            quo, cum amet non voluptatibus numquam? Beatae culpa, vel impedit
            nulla dolor accusantium in nihil. Labore laudantium dolorum
            consequatur quo natus. Qui expedita magnam a deleniti natus minus,
            soluta ipsam pariatur commodi, similique temporibus itaque
            praesentium omnis fuga iste numquam cumque tempore architecto ut
            quos? Asperiores nam ea, corporis, iste odio, ad minima voluptatibus
            itaque sapiente voluptas architecto! A illum vitae exercitationem
            distinctio.
          </p>
        </div>
      </div>
    </section>
  );
}
