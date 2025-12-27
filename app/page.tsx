export default function Home() {
  return (
    <div className="relative min-h-[90dvh] flex items-center justify-center font-sans bg-black text-white overflow-hidden">
      {/* Background Decor - เพิ่มลูกเล่นแสงฟุ้งเบาๆ ให้ดูไม่จืดชืด */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Badge เล็กๆ ด้านบน */}
        <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-white/50 mb-4">
          Real-time Dashboard
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            W4 Monitor System
          </h1>

          <p className="text-lg text-white/60 max-w-lg mx-auto leading-relaxed">
            ระบบตรวจสอบและจัดการข้อมูลแบบเรียลไทม์ <br className="hidden md:block" /> 
            ยกระดับการบริหารจัดการข้อมูลของคุณให้ง่ายและแม่นยำยิ่งขึ้น
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href="/login"
            className="w-full sm:w-auto px-10 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Get Started
          </a>

          <a
            href="/register"
            className="w-full sm:w-auto px-10 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Register
          </a>
        </div>

        {/* Status indicator */}
        <div className="pt-12 flex items-center justify-center gap-2 text-xs text-white/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          System Online
        </div>
      </div>
    </div>
  )
}