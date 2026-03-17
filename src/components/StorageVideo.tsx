import { getVideoDownloadURL } from "@/utils/firebaseVideoUtils";

export default async function StorageVideo({
  storagePath,
  muted = true,
  controls = false,
}: {
  storagePath: string;
  muted?: boolean;
  controls?: boolean;
}) {
  const src = await getVideoDownloadURL(storagePath);

  return (
    <video
      preload="none"
      aria-label="Video player"
      muted={muted}
      controls={controls}
      autoPlay
      loop
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