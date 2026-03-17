import React, { Suspense } from "react";
import SectionTitle from "./title";
import StorageVideo, { StorageVideoPlaceholder } from "../StorageVideo";

const videoStoragePath = "video/tango-in-woman.mp4";

export default function HomeWomanInTango() {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <SectionTitle
          heading="Tango in Woman"
          subheading="People like to say that in tango,
            the woman follows.
            That’s a surface reading.
            A woman in tango does not disappear into following.
            She becomes visible.
            Tango invites her out of effort
            and into sensation.
            Out of control
            and into listening.
            As she softens, something strong appears.
            Not loud strength.
            Not dramatic strength.
            But the kind that lives in the body.
            Like Frida Kahlo turned pain into image,
            a woman in tango turns tension into movement.
            Fear into awareness.
            Disorder into axis.
            She doesn’t dance after a man.
            She dances inside the dialogue.
            Inside herself.
            Inside the moment.
            And this is why she cannot be overlooked.
            She doesn’t ask for attention.
            She gathers it.
            Alive.
            Grounded.
            Undeniably present."
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
