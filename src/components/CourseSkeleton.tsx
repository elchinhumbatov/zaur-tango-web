import { Card, Skeleton } from "@heroui/react";

export default function CourseSkeleton() {
  return (
    <Card className="w-[270px] space-y-5 p-4 bg-transparent shadow-none">
      <div className="space-y-3">
        <Skeleton className="w-3/5">
          <div className="h-3 w-3/5 bg-amber-50" />
        </Skeleton>
        <Skeleton className="w-4/5">
          <div className="h-3 w-4/5 bg-amber-50" />
        </Skeleton>
        <Skeleton className="w-1/5">
          <div className="h-3 w-2/5 bg-amber-50" />
        </Skeleton>
      </div>

      {/* image */}
      <Skeleton>
        <div className="h-[100px] bg-amber-50" />
      </Skeleton>

      {/* description */}
      <Skeleton>
        <div className="h-8 w-full bg-amber-50" />
      </Skeleton>

      {/* buttons */}
      <div className="flex gap-8">
        <Skeleton className="w-1/2">
          <div className="h-5 w-3/5 bg-amber-50" />
        </Skeleton>
        <Skeleton className="w-1/2">
          <div className="h-5 w-3/5 bg-amber-50" />
        </Skeleton>
      </div>
    </Card>
  );
}
