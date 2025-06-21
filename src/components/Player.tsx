import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import jwt from "jsonwebtoken";

export default function Player({playbackId}: {playbackId: string}) {
  const secretKey = Buffer.from(
    process.env.NEXT_PUBLIC_MUX_SIGNING_PRIVATE_KEY || "",
    "base64"
  ).toString("ascii");
  const handleTokenGeneration = () => {
      return jwt.sign(
        {
          sub: playbackId,
          aud: "v",
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          kid: process.env.NEXT_PUBLIC_MUX_SIGNING_KEY_ID,
        },
        secretKey,
        { algorithm: "RS256" }
      );
    };

  return (
    <div>
      <MuxPlayer
        playbackId={playbackId}
        tokens={{ playback: handleTokenGeneration() }}
        streamType="on-demand"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
