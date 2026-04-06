import { getVideoDownloadURL } from "@/utils/firebaseVideoUtils";

export default async function StorageVideo({
  storagePath,
  poster,
  controls = false,
  muted = true,
  autoPlay = true,
  loop = true,
}: {
  storagePath: string;
  poster?: string;
  controls?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}) {
  const src = await getVideoDownloadURL(storagePath);

  return (
    <video
      preload="auto"
      poster={poster}
      aria-label="Video player"
      muted={muted}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      playsInline
      className="w-full"
      height="inherit"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export function StorageVideoPlaceholder() {
  return (
    <div className="w-full h-64 bg-gray-300 animate-pulse rounded-md flex items-center justify-center">
      {/* <span className="text-gray-500">Loading video...</span> */}
    </div>
  );
}