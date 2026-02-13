import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A192F]">
      <div className="flex flex-col items-center gap-6">
        
        <div className="relative w-16 h-16 animate-pulse">
          <Image
            src="/logo-bg.png"
            alt="Azcon Infra Loading"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="w-40 h-[2px] bg-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#26C6DA] animate-loaderBar" />
        </div>

      </div>
    </div>
  );
}
