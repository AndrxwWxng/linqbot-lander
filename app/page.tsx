import Image from "next/image";

const REPO = "https://github.com/amzoeee/soma-hackathon";

const pipeline = ["Message", "Plan", "Execute", "Recover"];

const tools = [
  { name: "move_cartesian", purpose: "Differential XYZ through IK" },
  { name: "move_wrist", purpose: "Wrist pitch / roll, ±160°" },
  { name: "set_gripper", purpose: "Open or close the gripper" },
  { name: "hold_position", purpose: "Stop and hold the pose" },
];

const log = [
  { state: "done", label: "Plan received", detail: "4 ordered tool calls" },
  { state: "done", label: "move_cartesian", detail: "+x 6cm · +z 2cm" },
  { state: "live", label: "set_gripper", detail: "closing" },
];

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <Image
        src="/mars.png"
        alt="A pixel-art robot arm standing on red Martian ground at sunset"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="pixelated scale-x-[-1] object-cover object-[50%_38%]"
      />

      {/* Legibility scrims: dark from the left, and top/bottom for the chrome. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#180803]/90 via-[#180803]/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#120603]/80 to-transparent" />

      <div className="relative grid h-full grid-rows-[auto_1fr_auto] px-6 py-6 sm:px-10 sm:py-8">
        <header className="rise flex items-center justify-between gap-4">
          <span className="font-serif text-2xl tracking-tight text-white sm:text-[26px]">
            Linqbot
          </span>

          <nav className="flex items-center gap-2">
            <ul className="hidden items-center rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur-md md:flex">
              {pipeline.map((step, i) => (
                <li
                  key={step}
                  className={`rounded-full px-4 py-1.5 text-[13px] ${
                    i === 0 ? "bg-white/15 text-white" : "text-white/70"
                  }`}
                >
                  {step}
                </li>
              ))}
            </ul>

            <span className="hidden rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[13px] text-white/75 backdrop-blur-md sm:inline">
              SOMA Hackathon &rsquo;26
            </span>

            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#2a0f06] transition-colors hover:bg-white/85"
            >
              GitHub
            </a>
          </nav>
        </header>

        <section className="flex min-h-0 items-center">
          <div className="max-w-2xl">
            <p
              className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[11px] tracking-widest text-orange-100/80 uppercase backdrop-blur-md"
              style={{ animationDelay: "60ms" }}
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-orange-400" />
              Linq + Luna · Xreal One Pro · LeRobot SO-101
            </p>

            <h1
              className="rise text-balance text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.03] font-medium tracking-[-0.03em] text-white"
              style={{ animationDelay: "120ms" }}
            >
              When autonomy needs a human, take over with your hands
            </h1>

            <p
              className="rise mt-5 max-w-xl text-[clamp(0.95rem,1.3vw,1.125rem)] leading-relaxed text-orange-50/75"
              style={{ animationDelay: "200ms" }}
            >
              Text the arm a task over iMessage. Luna plans it into an ordered
              tool sequence, the SO-101 executes step by step, and you get a
              deterministic reply. When a step fails, execution stops and you
              take the controls through AR glasses.
            </p>

            <dl
              className="rise mt-8 hidden gap-x-8 gap-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4"
              style={{ animationDelay: "280ms" }}
            >
              {tools.map((tool) => (
                <div key={tool.name}>
                  <dt className="font-mono text-[12px] text-orange-200">
                    {tool.name}
                  </dt>
                  <dd className="mt-1 text-[12px] leading-snug text-orange-50/55">
                    {tool.purpose}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Tool log, floating over the scene like a live run. */}
          <div className="ml-auto hidden w-64 flex-col gap-2.5 lg:flex">
            {log.map((entry, i) => (
              <div
                key={entry.label}
                className="rise flex items-center gap-3 rounded-xl border border-white/12 bg-black/35 px-3.5 py-2.5 backdrop-blur-md"
                style={{ animationDelay: `${400 + i * 140}ms` }}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    entry.state === "live"
                      ? "pulse-dot bg-orange-400"
                      : "bg-emerald-400"
                  }`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-mono text-[12px] text-white">
                    {entry.label}
                  </span>
                  <span className="block truncate text-[11px] text-orange-50/50">
                    {entry.detail}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer
          className="rise flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-wide text-orange-50/45"
          style={{ animationDelay: "480ms" }}
        >
          <span className="text-orange-50/70">
            iMessage → Linq webhook → FastAPI → Luna plan → robot tools → reply
          </span>
          <span className="hidden sm:inline">
            MediaPipe · ikpy · LangGraph · Feetech STS3215
          </span>
        </footer>
      </div>
    </main>
  );
}
