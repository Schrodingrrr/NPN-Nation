import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <Image
        src="/npcnation.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">NPN Nation</h1>
        <p className="mt-4 text-lg">Rid yourself of "The Game"</p>
        <p className="mt-4 text-lg">
          CA : AjwfA8RLLCmz6dmaKmtxYHm8LfNNbXFaAkGKSe9Cpump
        </p>
        <br />
        <br />
        <br />
        <p className="mt-4 text-lg">█▒▒▒▒▒▒▒▒▒...11.11%</p>
      </div>

      {/* Footer */}
      <footer className="mt-auto flex gap-6 flex-wrap items-center justify-center p-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/schrodingrrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/5140.png"
            alt="Dev PFP"
            width={22}
            height={22}
          />
          Dev
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://pump.fun/coin/AjwfA8RLLCmz6dmaKmtxYHm8LfNNbXFaAkGKSe9Cpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/pumpfunlogo.webp"
            alt="Window icon"
            width={22}
            height={22}
          />
          Buy Token
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Schrodingrrr/NPN-Nation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/githublogo.png"
            alt="Globe icon"
            width={22}
            height={22}
          />
          Github →
        </a>
      </footer>
    </div>
  );
}
