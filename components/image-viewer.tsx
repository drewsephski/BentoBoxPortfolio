import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ImageViewer({ src, alt, caption, className }: ImageViewerProps) {
  return (
    <div className={cn("my-8 space-y-2", className)}>
      <div className="relative rounded-lg overflow-hidden border">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
}
