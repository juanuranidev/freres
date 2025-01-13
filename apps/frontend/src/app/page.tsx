import Outfits from './components/outfits/outfits';
import Stores from './components/stores/stores';

export default async function Home() {
  return (
    <main className="relative w-full">
      <div className="relative w-full h-[100dvh]">
        <video
          className="w-full h-full object-cover"
          src="https://freres.ar/wp-content/uploads/2024/11/BANNERWEBVIDEO21-1.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Outfits />
      <Stores />
    </main>
  );
}
