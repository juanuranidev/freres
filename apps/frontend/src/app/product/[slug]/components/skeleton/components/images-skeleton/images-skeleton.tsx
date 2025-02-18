import { Skeleton } from '@/components/ui/skeleton';

export default function ImagesSkeleton() {
  const placeholders: number[] = Array.from({ length: 4 });

  return (
    <div className="grid grid-cols-2 gap-2">
      {placeholders.map((_, index) => (
        <div key={index} className="aspect-[3/4] relative">
          <Skeleton className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
