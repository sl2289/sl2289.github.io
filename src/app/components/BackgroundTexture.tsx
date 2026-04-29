export function BackgroundTexture() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle wave patterns */}
      <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03]" viewBox="0 0 800 800">
        <defs>
          <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M0 50 Q 25 30, 50 50 T 100 50"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="800" height="800" fill="url(#wave)" />
      </svg>

      {/* Gradient orb */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
}
