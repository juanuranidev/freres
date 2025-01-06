import Image from 'next/image';

interface Props {
  images: string[];
}

export default function Images({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 w-[70%]">
      {images.map((image, index) => (
        <div
          key={image}
          className="aspect-[3/4] relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Image
            src={image}
            alt="Product Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
