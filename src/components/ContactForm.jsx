export default function ContactForm() {
  const waMessage = "Hi Rizky! Found your website and I'd love to chat about a potential project. Let's collaborate!";
  const waUrl = `https://wa.me/6283834998685?text=${encodeURIComponent(waMessage)}`;

  return (
    <div id="contact" className="bg-primary-container brutalist-border !border-black p-10 md:p-16 brutalist-shadow !shadow-[#000] text-center text-black relative overflow-hidden">
      {/* Avatar floating top-right */}
      <div className="absolute top-4 right-8 md:right-16 flex flex-col items-center gap-1 z-10">
        <img
          src="/avatar.png"
          alt="Rizky"
          className="w-24 md:w-32 h-auto object-contain"
          style={{
            imageRendering: "pixelated",
            animation: "avatar-float 3s ease-in-out infinite",
          }}
        />
        {/* Speech bubble pointing to button */}
        <div
          className="bg-white border-2 border-black px-3 py-1 font-headline font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative"
          style={{ animation: "bubble-pulse 3s ease-in-out infinite" }}
        >
          Let's talk! 👇
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-black" />
        </div>
      </div>

      <h2 className="font-headline font-black text-5xl md:text-6xl uppercase tracking-tighter mb-6 text-black">
        Let's Build Something Great
      </h2>

      <p className="font-body text-xl md:text-2xl text-neutral-800 mb-12 max-w-3xl mx-auto font-medium">
        I'm always open to discussing new IT-based projects, innovative ideas, or opportunities to be part of your next big vision. Drop me a line and let's collaborate!
      </p>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-background text-black font-headline font-black text-2xl md:text-3xl uppercase py-6 px-12 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all"
        style={{ animation: "button-attention 4s ease-in-out infinite" }}
      >
        COLLABORATE ↗
      </a>

      <style>{`
        @keyframes avatar-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes bubble-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes button-attention {
          0%, 60%, 100% { transform: translateX(0) translateY(0); box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
          65% { transform: translateX(-2px) translateY(-2px); box-shadow: 10px 10px 0px 0px rgba(0,0,0,1); }
          70% { transform: translateX(2px) translateY(-2px); box-shadow: 10px 10px 0px 0px rgba(0,0,0,1); }
          75% { transform: translateX(-2px) translateY(0); box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
          80% { transform: translateX(0) translateY(0); box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
        }
      `}</style>
    </div>
  );
}
