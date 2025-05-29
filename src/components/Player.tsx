import MuxPlayer from "@mux/mux-player-react";
import React from "react";

export default function Player({token, playbackId}: {token: string, playbackId: string}) {
  return (
    <div>
      <MuxPlayer
        playbackId={playbackId}
        tokens={{ playback: token }}
        streamType="on-demand"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
