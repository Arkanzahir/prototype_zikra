import { useEffect, useRef, useState } from "react"

function BrandMark({ appIcon = false }: { appIcon?: boolean }) {
  return (
    <img
      className={appIcon ? "official-app-icon" : "official-brandmark"}
      src={appIcon ? "/assets/zikra-app-icon.png" : "/assets/zikra-brandmark.png"}
      alt="Zikra crescent, book, and stars"
      width={192}
      height={192}
    />
  )
}

type IconName = "home" | "book" | "spark" | "tasks" | "user" | "bell" | "pin" | "arrow" | "chevron" | "moon" | "sun" | "check" | "compass" | "heart" | "calendar" | "shield" | "mic" | "send" | "play" | "pause" | "plus" | "back" | "headphones" | "bookmark" | "school" | "close" | "camera" | "arrow-up"
function Icon({ name, size = 22 }: { name: IconName, size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7v10H3Z" />
        <path d="M9 20v-7h6v7" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v15M12 5C8 2 3 4 3 4v14s5-2 9 2c4-4 9-2 9-2V4s-5-2-9 1Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
        <path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5Z" />
      </>
    ),
    tasks: (
      <>
        <rect x="5" y="4" width="15" height="17" rx="3" />
        <path d="M9 2v4m6-4v4M9 11l1 1 2-2m2 2h3M9 16l1 1 2-2m2 2h3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
      </>
    ),
    bell: (
      <>
        <path d="M5 16h14l-2-3V9a5 5 0 0 0-10 0v4Zm5 4h4" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    moon: <path d="M20 14A9 9 0 0 1 10 3a9 9 0 1 0 10 11Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-3 5-5 3 3-5Z" />
      </>
    ),
    heart: <path d="M12 20 4 12C-2 5 7 0 12 7c5-7 14-2 8 5Z" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 2v6m10-6v6M3 11h18m-13 4h2m4 0h2" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 8 4v6c0 6-8 10-8 10S4 18 4 12V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="13" rx="3" />
        <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" />
      </>
    ),
    send: (
      <>
        <path d="m3 3 19 9-19 9 4-9Zm4 9h15" />
      </>
    ),
    camera: (
      <>
        <path d="M8 5 9.5 3h5L16 5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    "arrow-up": <path d="M12 19V5m-6 6 6-6 6 6" />,
    play: <path d="m9 5 11 7-11 7Z" />,
    pause: (
      <>
        <path d="M8 5v14m8-14v14" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    back: <path d="M20 12H4m6-6-6 6 6 6" />,
    headphones: (
      <>
        <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
        <rect x="3" y="12" width="4" height="8" rx="2" />
        <rect x="17" y="12" width="4" height="8" rx="2" />
      </>
    ),
    bookmark: <path d="M6 3h12v18l-6-4-6 4Z" />,
    school: (
      <>
        <path d="m2 8 10-5 10 5-10 5Zm4 3v7c4 3 8 3 12 0v-7m4-3v9" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
const prayers = [
  ["Fajr", "04:12", "moon"],
  ["Dhuhr", "11:38", "sun"],
  ["Asr", "14:58", "sun"],
  ["Maghrib", "17:42", "sun"],
  ["Isha", "18:52", "moon"],
]
const protectionDuas = [
  {
    title: "Doa Gempa Bumi & Musibah",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
    meaning: "Sesungguhnya kami milik Allah dan kepada-Nya kami kembali. Ya Allah, berilah aku pahala dalam musibahku dan gantilah dengan yang lebih baik.",
    source: "Sahih Muslim · 918",
    note: "Doa umum saat tertimpa musibah · bukan doa khusus gempa",
  },
  {
    title: "Doa Turun Hujan Lebat",
    arabic: "اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اللَّهُمَّ عَلَى الْآكَامِ وَالظِّرَابِ وَبُطُونِ الْأَوْدِيَةِ وَمَنَابِتِ الشَّجَرِ",
    meaning: "Ya Allah, turunkanlah hujan di sekitar kami, bukan yang membahayakan kami. Ya Allah, turunkanlah di dataran tinggi, bukit-bukit, lembah-lembah, dan tempat tumbuhnya pepohonan.",
    source: "Sahih al-Bukhari · 1014",
    note: "Saat hujan lebat dikhawatirkan menimbulkan bahaya",
  },
]
const initialTasks = [
  {
    title: "Physics lab report",
    detail: "Module 3 · Harmonic motion",
    category: "Study",
    done: false,
    tag: "Due tomorrow",
    color: "coral",
  },
  {
    title: "Practice integration",
    detail: "Mathematics · Page 42, questions 1–10",
    category: "Study",
    done: false,
    tag: "Friday, 23:59",
    color: "violet",
  },
  {
    title: "Read Al-Baqarah",
    detail: "Daily tilawah · Verses 1–20",
    category: "Ibadah",
    done: true,
    tag: "Completed",
    color: "mint",
  },
  {
    title: "Pray Asr on time",
    detail: "Campus mosque · 14:58",
    category: "Ibadah",
    done: false,
    tag: "Up next",
    color: "mint",
  },
]
export default function App() {
  const [screen, setScreen] = useState("Home")
  const [onboarding, setOnboarding] = useState(-1)
  const [role, setRole] = useState("University student")
  const [goals, setGoals] = useState([
    "Pray on time",
    "Stay on top of homework",
  ])
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState("All")
  const [readerTab, setReaderTab] = useState("Surah")
  const [surah, setSurah] = useState("Al-Baqarah")
  const [playing, setPlaying] = useState(false)
  const [verse, setVerse] = useState(1)
  const [saved, setSaved] = useState<number[]>([])
  const [aiMode, setAiMode] = useState("Voice")
  const [listening, setListening] = useState(false)
  const [query, setQuery] = useState("")
  const homeworkPhotoInput = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [toast, setToast] = useState("")
  const [timer, setTimer] = useState(925)
  const [running, setRunning] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [adding, setAdding] = useState(false)
  const [day, setDay] = useState(8)
  const [alarm, setAlarm] = useState(true)
  const [compassHeading, setCompassHeading] = useState<number | null>(null)
  const [compassEnabled, setCompassEnabled] = useState(false)
  useEffect(() => {
    if (!compassEnabled || screen !== "Qibla") return
    const update = (event: DeviceOrientationEvent) => {
      const appleHeading = (event as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading
      if (typeof appleHeading === "number") setCompassHeading(appleHeading)
      else if (event.absolute && event.alpha !== null) setCompassHeading((360 - event.alpha) % 360)
    }
    window.addEventListener("deviceorientation", update)
    window.addEventListener("deviceorientationabsolute", update)
    return () => {
      window.removeEventListener("deviceorientation", update)
      window.removeEventListener("deviceorientationabsolute", update)
    }
  }, [compassEnabled, screen])
  async function calibrateCompass() {
    if (!("DeviceOrientationEvent" in window)) {
      setToast("Sensor kompas tidak tersedia. Arah 294° adalah panduan untuk lokasi ITS.")
      return
    }
    try {
      const orientation = DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> }
      if (orientation.requestPermission && await orientation.requestPermission() !== "granted") {
        setToast("Izinkan akses sensor gerak untuk menggunakan kompas.")
        return
      }
      setCompassEnabled(true)
      setToast("Pegang ponsel mendatar dan gerakkan perlahan membentuk angka delapan. Sensor akan aktif jika didukung.")
    } catch {
      setToast("Sensor tidak dapat diakses di preview ini. Gunakan kompas perangkat untuk verifikasi.")
    }
  }
  const [activeDua, setActiveDua] = useState<string | null>(null)
  useEffect(() => {
    setActiveDua(null)
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel()
    }
  }, [screen])
  function playProtectionDua(dua: (typeof protectionDuas)[number]) {
    if (!("speechSynthesis" in window)) {
      setToast("Audio tidak tersedia di perangkat ini.")
      return
    }
    window.speechSynthesis.cancel()
    if (activeDua === dua.title) {
      setActiveDua(null)
      return
    }
    const speech = new SpeechSynthesisUtterance(dua.arabic)
    speech.lang = "ar-SA"
    speech.rate = 0.75
    speech.onend = () => setActiveDua(null)
    speech.onerror = () => {
      setActiveDua(null)
      setToast("Audio Arab tidak tersedia. Silakan gunakan perangkat dengan suara bahasa Arab.")
    }
    setActiveDua(dua.title)
    window.speechSynthesis.speak(speech)
  }
  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(""), 3500)
    return () => clearTimeout(id)
  }, [toast])
  useEffect(() => {
    if (!running) return
    const id = setInterval(
      () =>
        setTimer((t) => {
          if (t <= 1) {
            setRunning(false)
            return 0
          }
          return t - 1
        }),
      1000,
    )
    return () => clearInterval(id)
  }, [running])
  function navigate(next: string) {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  function askAI(text: string) {
    setMessages((m) => [...m, text])
    setAiMode("Chat")
    navigate("Zikra AI")
  }
  const completed = tasks.filter((t) => t.done).length
  const navItems: [string, IconName][] = [
    ["Home", "home"],
    ["Quran", "book"],
    ["Zikra AI", "spark"],
    ["Study", "tasks"],
    ["Profile", "user"],
  ]
  const actionItems: [string, IconName, string, string][] = [
    ["Last Read", "bookmark", "Quran", "gold"],
    ["Al-Quran", "book", "Quran", "gold"],
    ["Doa Harian", "heart", "Duas", "gold"],
    ["Target Hifz", "school", "Study", "gold"],
    ["Arah Kiblat", "compass", "Qibla", "gold"],
    ["Waktu Sholat", "sun", "Prayer Times", "gold"],
    ["Tugas & PR", "tasks", "Study", "gold"],
    ["Zikra AI", "spark", "Zikra AI", "violet"],
  ]
  const title =
    screen === "Home"
      ? "A little faith. A little focus."
      : screen === "Study"
        ? "Make room for what matters."
        : screen === "Quran"
          ? "A moment with the Quran."
          : screen === "Zikra AI"
            ? "Your curious mind, supported."
            : "Your everyday companion."
  return (
    <div className={`app ${screen === "Protector" ? "protector-active" : screen === "Home" ? "home-immersive" : screen === "Qibla" ? "qibla-active" : ""}`}>
      <aside className="sidebar">
        <button className="brand" onClick={() => navigate("Home")}>
          <span className="brand-mark"><BrandMark /></span>
          zikra<span className="brand-dot">.</span>
        </button>
        <div className="sidebar-caption">FAITH MEETS YOUR EVERYDAY</div>
        <nav>
          {navItems.map(([label, icon]) => (
            <button
              key={label}
              className={`side-link ${screen === label ? "selected" : ""}`}
              onClick={() => navigate(label)}
            >
              <Icon name={icon} />
              {label}
              {label === "Zikra AI" && (
                <span className="small-tag violet">AI</span>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="gold-text">
            <Icon name="spark" size={24} />
          </span>
          <p>
            Small steps.
            <br />
            Meaningful days.
          </p>
          <span>Grow in faith, one day at a time.</span>
          <button onClick={() => setOnboarding(0)}>
            Explore your journey <Icon name="arrow" size={17} />
          </button>
        </div>
        <button className="side-profile" onClick={() => navigate("Profile")}>
          <span className="avatar">A</span>
          <span>
            <strong>Arkan Firdaus</strong>
            <small>University student</small>
          </span>
          <Icon name="chevron" size={18} />
        </button>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div className="mobile-logo">
            <span className="brand-mark"><BrandMark /></span>
            <strong>zikra.</strong>
          </div>
          <div className="breadcrumb">
            Your daily companion <span>/</span> <strong>{screen}</strong>
          </div>
          <div className="top-actions">
            <span className="safe">
              <Icon name="shield" size={15} /> You’re in a safe place
            </span>
            <button
              className="icon-button notification"
              aria-label="Notifications"
              onClick={() =>
                setToast("You're all caught up. Asr reminder is set for 14:58.")
              }
            >
              <Icon name="bell" />
              <i />
            </button>
            <button
              className="avatar top-avatar"
              onClick={() => navigate("Profile")}
              aria-label="Open profile"
            >
              A
            </button>
          </div>
        </header>
        <main>
          <div className={`page-heading ${["Protector", "Home", "Qibla"].includes(screen) ? "protector-hidden-heading" : ""}`}>
            <div>
              <div className="eyebrow">
                {screen === "Home"
                  ? "ASSALAMUALAIKUM, ARKAN"
                  : `YOUR ${screen.toUpperCase()} SPACE`}
              </div>
              <h1>{screen === "Protector" ? "Zikra Protector" : title}</h1>
              <p>
                {screen === "Home"
                  ? "Keep your prayers close and your day in balance."
                  : screen === "Protector"
                    ? "Siaga Bencana BMKG & Doa Keselamatan"
                    : "A calmer space to learn, reflect, and grow."}
              </p>
            </div>
            <span className="date-label">
              <Icon name="calendar" size={17} /> Wednesday, October 8
            </span>
          </div>
          {screen === "Home" && (
            <div className="home-grid">
              <section className="prayer-hero">
                <div className="hero-top">
                  <div className="home-hero-greeting"><span><Icon name="pin" size={15} /> Sukolilo, Surabaya</span><h1>Assalamualaikum, Arkan</h1><p>Ibadah terjaga. Tugas tertata.</p></div>
                  <button
                    aria-label="Prayer reminders"
                    onClick={() => {
                      setAlarm(!alarm)
                      setToast(
                        alarm
                          ? "Prayer reminders paused"
                          : "Prayer reminders enabled",
                      )
                    }}
                  >
                    <Icon name="bell" size={18} />
                  </button>
                </div>
                <img className="mosque-atmosphere" src="/assets/prayer-mosque.svg" alt="" aria-hidden="true" width={1000} height={300} />
                <div className="clock-area">
                  <div className="hijri">15 Jumada Al-Akhira, 1447 AH</div>
                  <div className="clock">
                    14<span>:</span>54
                  </div>
                  <div className="countdown">
                    Ashar tinggal <strong>4 menit</strong> lagi
                  </div>
                  <div className="hero-caption">
                    A moment to pause. A moment to reconnect.
                  </div>
                </div>
                <div className="prayer-strip">
                  {prayers.map(([label, time, icon]) => (
                    <div
                      key={label}
                      className={label === "Asr" ? "active-prayer" : ""}
                    >
                      <Icon name={icon as IconName} size={18} />
                      <span>{({ Fajr: "Subuh", Dhuhr: "Dzuhur", Asr: "Ashar", Maghrib: "Maghrib", Isha: "Isya" } as Record<string, string>)[label]}</span>
                      <strong>{time}</strong>
                      {label === "Asr" && <i />}
                    </div>
                  ))}
                </div>
              </section>
              <section className="goal-card card">
                <div className="section-title">
                  <h2>Target Harian</h2>
                  <span className="small-tag mint">
                    {35 + (completed - 1) * 4}% Selesai
                  </span>
                </div>
                <p>{8 + completed - 1} dari 24 checklist ibadah & tugas selesai</p>
                <div className="goal-count">
                  <strong>{8 + completed - 1}</strong>
                  <span>dari 24 target harian</span>
                  <span className="goal-check">
                    <Icon name="check" size={18} />
                  </span>
                </div>
                <div className="segmented-progress">
                  {Array.from({ length: 24 }, (_, i) => (
                    <i
                      key={i}
                      className={i < 8 + completed - 1 ? "filled" : ""}
                    />
                  ))}
                </div>
                <button className="goal-cta" onClick={() => navigate("Study")}>
                  Buka Checklist Tugas & Ibadah
                </button>
              </section>
              <section className="quick-section">
                <div className="section-title">
                  <h2>Your daily essentials</h2>
                  <span className="muted-caption">
                    A little help, a tap away
                  </span>
                </div>
                <div className="quick-grid">
                  {actionItems.map(([label, icon, target, color]) => (
                    <button
                      className="quick-action"
                      key={label}
                      onClick={() => {
                        if (label === "Target Hifz") setFilter("Ibadah")
                        if (label === "Last Read") { setSurah("Al-Baqarah"); setVerse(1) }
                        navigate(target)
                      }}
                    >
                      <span className={`action-icon ${color}`}>
                        <Icon name={icon} size={25} />
                      </span>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </section>
              <section className="verse-card">
                <div className="verse-label">
                  <Icon name="book" size={17} /> A VERSE TO CARRY WITH YOU
                </div>
                <div className="verse-arabic" lang="ar" dir="rtl">
                  فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
                </div>
                <p>“Indeed, with hardship comes ease.”</p>
                <div className="verse-footer">
                  <span>ASH-SHARH · 94:5</span>
                  <button
                    onClick={() => {
                      setSurah("Ash-Sharh")
                      navigate("Quran")
                    }}
                    aria-label="Read verse"
                  >
                    <Icon name="arrow" size={20} />
                  </button>
                </div>
                <div className="leaf-decoration">✧</div>
              </section>
              <section className="timeline-section">
                <div className="section-title">
                  <h2>The rhythm of your day</h2>
                  <button
                    className="text-link"
                    onClick={() => navigate("Calendar")}
                  >
                    Full schedule <Icon name="arrow" size={15} />
                  </button>
                </div>
                <div className="timeline">
                  {[
                    [
                      "13:00",
                      "14:30",
                      "Advanced mathematics",
                      "Lab 2 · Campus B",
                      "school",
                      "violet",
                      "Finished",
                    ],
                    [
                      "14:58",
                      "",
                      "Asr prayer",
                      "A mindful break at the campus mosque",
                      "moon",
                      "mint",
                      "Up next",
                    ],
                    [
                      "16:00",
                      "17:00",
                      "Physics study session",
                      "Chapter 4 · Bring your notes",
                      "book",
                      "blue",
                      "Study",
                    ],
                  ].map(([time, end, label, detail, icon, color, tag], i) => (
                    <div
                      className={`timeline-row ${i === 0 ? "past" : ""}`}
                      key={label}
                    >
                      <div className="timeline-time">
                        <strong>{time}</strong>
                        <span>{end || "15 min"}</span>
                      </div>
                      <div className={`timeline-dot ${color}`} />
                      <div className="timeline-content">
                        <span className={`timeline-icon ${color}`}>
                          <Icon name={icon as IconName} size={20} />
                        </span>
                        <div>
                          <h3>{label}</h3>
                          <p>{detail}</p>
                        </div>
                        <span className={`small-tag ${color}`}>{tag}</span>
                        {i === 1 && (
                          <button
                            aria-label="Toggle Asr reminder"
                            className={`alarm-toggle ${alarm ? "on" : ""}`}
                            onClick={() => setAlarm(!alarm)}
                          >
                            <i />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="ai-promo">
                <div>
                  <span className="small-tag violet">
                    <Icon name="spark" size={13} /> ZIKRA AI
                  </span>
                  <h2>
                    A study buddy.
                    <br />
                    And a little more.
                  </h2>
                  <p>
                    Big questions or tricky homework.
                    <br />
                    Let’s figure it out together.
                  </p>
                  <button
                    className="text-link"
                    onClick={() => navigate("Zikra AI")}
                  >
                    Meet your companion <Icon name="arrow" size={16} />
                  </button>
                </div>
                <div className="orb small-orb">
                  <i />
                  <i />
                  <i />
                </div>
              </section>
              <div className="home-protector-link"><Icon name="shield" size={17} /><div><strong>Zikra Protector</strong><span>Cuaca, keselamatan & doa harian</span></div><button onClick={() => navigate("Protector")} aria-label="Buka Zikra Protector"><Icon name="arrow" size={19} /></button></div>
            </div>
          )}
          {screen === "Quran" && (
            <div className="reader-layout">
              <section>
                <div className="reader-tools">
                  <div className="tabs">
                    {["Surah", "Page", "Juz"].map((t) => (
                      <button
                        className={readerTab === t ? "active" : ""}
                        onClick={() => setReaderTab(t)}
                        key={t}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <select
                    aria-label="Select surah"
                    value={surah}
                    onChange={(e) => {
                      setSurah(e.target.value)
                      setVerse(1)
                    }}
                  >
                    <option>Al-Baqarah</option>
                    <option>Al-Fatihah</option>
                    <option>Ash-Sharh</option>
                  </select>
                </div>
                {readerTab !== "Surah" && (
                  <div className="reader-index card">
                    <strong>
                      {readerTab === "Page" ? "Choose a page" : "Choose a Juz"}
                    </strong>
                    <div className="index-buttons">
                      {Array.from(
                        { length: readerTab === "Juz" ? 8 : 6 },
                        (_, i) => (
                          <button
                            className={verse === i + 1 ? "selected" : ""}
                            onClick={() => setVerse(i + 1)}
                            key={i}
                          >
                            {i + 1}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}
                <div className="surah-banner">
                  <span className="eyebrow">THE NOBLE QURAN</span>
                  <h2 lang="ar" dir="rtl">
                    {surah === "Al-Baqarah"
                      ? "سُورَةُ الْبَقَرَةِ"
                      : surah === "Al-Fatihah"
                        ? "سُورَةُ الْفَاتِحَةِ"
                        : "سُورَةُ الشَّرْحِ"}
                  </h2>
                  <p>
                    {surah} ·{" "}
                    {surah === "Al-Baqarah"
                      ? "286"
                      : surah === "Al-Fatihah"
                        ? "7"
                        : "8"}{" "}
                    verses · Juz 1
                  </p>
                  <div className="bismillah" lang="ar" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </div>
                </div>
                {(surah === "Al-Baqarah"
                  ? [
                      ["الم", "Alif-Lām-Mīm.", "Alif, Lam, Meem."],
                      [
                        "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ",
                        "Dhālika l-kitābu lā rayba fīh, hudan lil-muttaqīn.",
                        "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
                      ],
                    ]
                  : surah === "Al-Fatihah"
                    ? [
                        [
                          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                          "Bismillāhi r-raḥmāni r-raḥīm.",
                          "In the name of Allah, the Most Compassionate, the Most Merciful.",
                        ],
                        [
                          "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                          "Al-ḥamdu lillāhi rabbi l-ʿālamīn.",
                          "All praise is for Allah, Lord of all worlds.",
                        ],
                      ]
                    : [
                        [
                          "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
                          "Alam nashraḥ laka ṣadrak.",
                          "Have We not uplifted your heart for you?",
                        ],
                        [
                          "وَوَضَعْنَا عَنْكَ وِزْرَكَ",
                          "Wa waḍaʿnā ʿanka wizrak.",
                          "And relieved you of your burden?",
                        ],
                      ]
                ).map(([arabic, latin, translation], i) => (
                  <article className="ayah card" key={arabic}>
                    <div className="section-title">
                      <span className="ayah-number">{i + 1}</span>
                      <button
                        className={`icon-button ${
                          saved.includes(i) ? "saved" : ""
                        }`}
                        aria-label="Bookmark verse"
                        onClick={() =>
                          setSaved((s) =>
                            s.includes(i)
                              ? s.filter((n) => n !== i)
                              : [...s, i],
                          )
                        }
                      >
                        <Icon name="bookmark" size={19} />
                      </button>
                    </div>
                    <div className="arabic" lang="ar" dir="rtl">
                      {arabic}
                    </div>
                    <p className="transliteration">{latin}</p>
                    <p>{translation}</p>
                    <div className="ayah-actions">
                      <button
                        onClick={() => {
                          setVerse(i + 1)
                          setPlaying(!playing)
                        }}
                      >
                        <Icon
                          name={playing && verse === i + 1 ? "pause" : "play"}
                          size={17}
                        />{" "}
                        Listen
                      </button>
                      <button
                        className="ai-ask"
                        onClick={() =>
                          askAI(`Help me understand ${surah}, verse ${i + 1}.`)
                        }
                      >
                        <Icon name="spark" size={16} /> Ask Zikra AI
                      </button>
                    </div>
                  </article>
                ))}
              </section>
              <aside className="reader-aside card">
                <Icon name="book" size={30} />
                <h2>Read with intention.</h2>
                <p>
                  You don’t need to read a lot. Just make a little space for it,
                  every day.
                </p>
                <span className="small-tag gold">YOUR DAILY TILAWAH</span>
                <h3>1 of 20 verses</h3>
                <div className="progress-track">
                  <i />
                </div>
              </aside>
              <div className="audio-player">
                <span className="audio-avatar">
                  <Icon name="headphones" />
                </span>
                <div>
                  <strong>Mishary Al-Afasy</strong>
                  <small>
                    {surah} · Verse {verse} <span>· Demo player</span>
                  </small>
                </div>
                <button
                  className="icon-button"
                  aria-label="Previous verse"
                  onClick={() => setVerse((v) => Math.max(1, v - 1))}
                >
                  <Icon name="back" size={19} />
                </button>
                <button
                  className="play-button"
                  aria-label={playing ? "Pause" : "Play"}
                  onClick={() => setPlaying(!playing)}
                >
                  <Icon name={playing ? "pause" : "play"} size={20} />
                </button>
                <button
                  className="icon-button"
                  aria-label="Next verse"
                  onClick={() => setVerse((v) => v + 1)}
                >
                  <Icon name="arrow" size={19} />
                </button>
              </div>
            </div>
          )}
          {screen === "Study" && (
            <div className="study-layout">
              <section>
                <div className="week-strip card">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <button
                      className={day === i + 6 ? "selected" : ""}
                      onClick={() => setDay(i + 6)}
                      key={i}
                    >
                      <span>{d}</span>
                      <strong>{i + 6}</strong>
                      <i />
                    </button>
                  ))}
                </div>
                <div className="section-title study-title">
                  <h2>
                    {day === 8
                      ? "Today’s intentions"
                      : `October ${day} intentions`}
                  </h2>
                  <span className="small-tag gold">7-day streak</span>
                </div>
                <div className="tabs task-tabs">
                  {["All", "Study", "Ibadah"].map((t) => (
                    <button
                      className={filter === t ? "active" : ""}
                      onClick={() => setFilter(t)}
                      key={t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="task-list">
                  {tasks
                    .filter((t) => filter === "All" || filter === t.category)
                    .map((t) => (
                      <div
                        className={`task card ${t.done ? "done" : ""}`}
                        key={t.title}
                      >
                        <button
                          className={`checkbox ${t.done ? "checked" : ""}`}
                          aria-label={`Mark ${t.title} ${
                            t.done ? "incomplete" : "complete"
                          }`}
                          onClick={() =>
                            setTasks((ts) =>
                              ts.map((a) =>
                                a === t ? { ...a, done: !a.done } : a,
                              ),
                            )
                          }
                        >
                          {t.done && <Icon name="check" size={16} />}
                        </button>
                        <div>
                          <h3>{t.title}</h3>
                          <p>{t.detail}</p>
                          <span className={`small-tag ${t.color}`}>
                            {t.done ? "Completed" : t.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                {adding ? (
                  <form
                    className="add-form card"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (!newTask.trim()) return
                      setTasks((t) => [
                        ...t,
                        {
                          title: newTask.trim(),
                          detail: "Your personal intention",
                          category: "Study",
                          done: false,
                          tag: "Today",
                          color: "blue",
                        },
                      ])
                      setNewTask("")
                      setAdding(false)
                    }}
                  >
                    <input
                      ref={homeworkPhotoInput}
                      className="homework-photo-input"
                      type="file"
                      accept="image/*"
                      capture="environment"
                      aria-label="Choose a homework photo"
                      onChange={(e) => {
                        if (e.target.files?.length) {
                          setToast("Homework photo selected. Image scanning is a prototype demo; type your question to continue.")
                        }
                        e.target.value = ""
                      }}
                    />
                    <div className="composer-tools">
                      <button
                        className="composer-tool"
                        type="button"
                        aria-label="Scan homework with camera"
                        title="Scan homework"
                        onClick={() => homeworkPhotoInput.current?.click()}
                      >
                        <Icon name="camera" size={20} />
                      </button>
                      <button
                        className="composer-tool"
                        type="button"
                        aria-label="Switch to voice mode"
                        title="Voice mode"
                        onClick={() => { setAiMode("Voice"); setListening(false) }}
                      >
                        <Icon name="mic" size={20} />
                      </button>
                    </div>
                    <input
                      className="composer-text"
                      autoFocus
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="What would you like to do?"
                      aria-label="New task"
                    />
                    <button className="primary" type="submit">
                      Add task
                    </button>
                  </form>
                ) : (
                  <button className="add-task" onClick={() => setAdding(true)}>
                    <Icon name="plus" size={19} /> Add an intention
                  </button>
                )}
              </section>
              <aside>
                <div className="focus-card">
                  <span className="small-tag violet">ONE THING AT A TIME</span>
                  <h2>Your focus space</h2>
                  <p>Quiet your mind. Find your flow.</p>
                  <div className={`timer-ring ${running ? "running" : ""}`}>
                    <strong>
                      {Math.floor(timer / 60)
                        .toString()
                        .padStart(2, "0")}
                      :{(timer % 60).toString().padStart(2, "0")}
                    </strong>
                    <span>of 25 minutes</span>
                  </div>
                  <button
                    className="primary"
                    onClick={() => setRunning(!running)}
                  >
                    <Icon name={running ? "pause" : "play"} size={18} />
                    {running ? "Pause focus" : "Start focus"}
                  </button>
                  <button
                    className="text-link reset"
                    onClick={() => {
                      setRunning(false)
                      setTimer(1500)
                    }}
                  >
                    Reset session
                  </button>
                </div>
                <div className="study-tip card">
                  <Icon name="spark" />
                  <h3>Progress, not perfection.</h3>
                  <p>
                    A completed small task is better than a perfect plan. You’ve
                    got this, Arkan.
                  </p>
                </div>
              </aside>
            </div>
          )}
          {screen === "Zikra AI" && (
            <section className="ai-screen">
              <div className="ai-top">
                <span className="small-tag violet">
                  <Icon name="spark" size={14} /> YOUR AI COMPANION
                </span>
                <div className="tabs">
                  {["Voice", "Chat"].map((t) => (
                    <button
                      className={aiMode === t ? "active" : ""}
                      onClick={() => setAiMode(t)}
                      key={t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              {aiMode === "Voice" ? (
                <div className="voice-content">
                  <div className="voice-status">
                    <i className={listening ? "live-dot" : ""} />
                    {listening
                      ? "Listening · prototype preview"
                      : "Here for your next question"}
                  </div>
                  <div
                    className={`orb hero-orb ${listening ? "listening" : ""}`}
                  >
                    <i />
                    <i />
                    <i />
                    <div />
                  </div>
                  <h2>
                    A little clarity.
                    <br />
                    Whenever you need it.
                  </h2>
                  <p>
                    From homework hurdles to questions about faith,
                    <br />
                    let’s learn something together.
                  </p>
                  <div className="voice-suggestions">
                    {["Help me with my homework", "Explain a Quran verse"].map(
                      (s) => (
                        <button onClick={() => askAI(s)} key={s}>
                          {s}
                          <Icon name="arrow" size={16} />
                        </button>
                      ),
                    )}
                  </div>
                  <div className="voice-controls">
                    <button
                      className="icon-button"
                      aria-label="Switch to text chat"
                      onClick={() => setAiMode("Chat")}
                    >
                      <Icon name="tasks" />
                    </button>
                    <button
                      className={`mic-button ${listening ? "recording" : ""}`}
                      onClick={() => setListening(!listening)}
                      aria-label={
                        listening
                          ? "Stop demo listening"
                          : "Start demo listening"
                      }
                    >
                      <Icon name={listening ? "pause" : "mic"} size={27} />
                    </button>
                    <button
                      className="icon-button"
                      aria-label="Stop listening"
                      onClick={() => setListening(false)}
                    >
                      <Icon name="close" />
                    </button>
                  </div>
                  <span className="muted-caption">
                    Tap to explore voice mode · demo only
                  </span>
                </div>
              ) : (
                <div className="chat-content">
                  <div className="chat-greeting">
                    <span className="ai-chat-icon">
                      <Icon name="spark" />
                    </span>
                    <div className="card">
                      <strong>Assalamualaikum, Arkan.</strong>
                      <p>
                        What’s on your mind? Let’s break it down, one step at a
                        time.
                      </p>
                    </div>
                  </div>
                  {messages.length === 0 && (
                    <div className="chat-starter">
                      <h2>What will we explore today?</h2>
                      <button
                        onClick={() =>
                          setMessages(["How do I solve ∫ 2x(x² + 1)³ dx?"])
                        }
                      >
                        Explain integral substitution{" "}
                        <Icon name="arrow" size={17} />
                      </button>
                      <button
                        onClick={() =>
                          setMessages([
                            "Help me understand Al-Baqarah, verse 2.",
                          ])
                        }
                      >
                        Reflect on a Quran verse <Icon name="arrow" size={17} />
                      </button>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i}>
                      <div className="user-bubble">{m}</div>
                      <div className="solution card">
                        <span className="small-tag violet">
                          <Icon name="spark" size={13} /> DEMO RESPONSE
                        </span>
                        <h3>
                          {/verse|Quran|Baqarah/i.test(m)
                            ? "A moment of reflection"
                            : "Let’s take it step by step"}
                        </h3>
                        {/verse|Quran|Baqarah/i.test(m) ? (
                          <>
                            <p>
                              The Quran invites us to approach it with openness
                              and mindfulness. Take a moment to read the verse
                              slowly and reflect on its message.
                            </p>
                            <p>
                              For detailed tafsir, consult a trusted scholar or
                              an established commentary. This companion doesn’t
                              replace qualified guidance.
                            </p>
                          </>
                        ) : (
                          <>
                            <p>Here’s an example of integral substitution:</p>
                            <div className="math">∫ 2x(x² + 1)³ dx</div>
                            <p>
                              <strong>1.</strong> Let u = x² + 1, so du = 2x dx.
                            </p>
                            <p>
                              <strong>2.</strong> Substitute to get ∫ u³ du.
                            </p>
                            <div className="math result">¼(x² + 1)⁴ + C</div>
                            <p>
                              Try differentiating the answer to check your work.
                            </p>
                          </>
                        )}
                        <div className="companion-tip">
                          <Icon name="moon" size={17} /> Remember to make a
                          little space for your next prayer.
                        </div>
                      </div>
                    </div>
                  ))}
                  <form
                    className="chat-input"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (query.trim()) {
                        setMessages((m) => [...m, query])
                        setQuery("")
                      }
                    }}
                  >
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask a question..."
                      aria-label="Message Zikra AI"
                    />
                    <button className="composer-send" aria-label="Send message" type="submit" disabled={!query.trim()}>
                      <Icon name="arrow-up" size={20} />
                    </button>
                  </form>
                  <p className="demo-caption">
                    Prototype responses are illustrative, not live AI.
                  </p>
                </div>
              )}
            </section>
          )}
          {screen === "Profile" && (
            <div className="profile-page card">
              <div className="profile-brand-icon"><BrandMark appIcon /></div>
              <h2>Arkan Firdaus</h2>
              <p>{role} · Surabaya</p>
              <span className="small-tag mint">
                Growing a little, every day
              </span>
              <div className="profile-stats">
                <div>
                  <strong>7</strong>
                  <span>Day streak</span>
                </div>
                <div>
                  <strong>{8 + completed - 1}</strong>
                  <span>Tasks complete</span>
                </div>
                <div>
                  <strong>{saved.length}</strong>
                  <span>Saved verses</span>
                </div>
              </div>
              <h3>Your intentions</h3>
              <div className="goal-chips">
                {goals.map((g) => (
                  <span className="small-tag mint" key={g}>
                    <Icon name="check" size={13} />
                    {g}
                  </span>
                ))}
              </div>
              <button className="primary" onClick={() => setOnboarding(0)}>
                Personalize your journey
              </button>
            </div>
          )}
          {screen === "Qibla" && (
            <div className="qibla-page">
              <header className="qibla-heading"><div><h1>Arah Kiblat</h1><button className="qibla-location" onClick={() => setToast("Lokasi panduan: Sukolilo, Surabaya (ITS). GPS belum terhubung.")}><Icon name="pin" size={15} /> Sukolilo, Surabaya (ITS) <span>⌵</span></button></div><span className="qibla-header-icon"><Icon name="compass" size={24} /></span></header>
              <section className="qibla-compass-panel">
                <div className="rosette-compass">
                  <svg className="rosette-dial" width="320" height="320" viewBox="0 0 320 320" aria-label="Kompas roset dengan penanda derajat dan arah mata angin" role="img" style={{ transform: `rotate(${-(compassHeading ?? 0)}deg)` }}>
                    <polygon points={Array.from({ length: 32 }, (_, i) => { const a = (i * 11.25 - 90) * Math.PI / 180; const r = i % 2 ? 133 : 153; return `${160 + Math.cos(a) * r},${160 + Math.sin(a) * r}` }).join(" ")} fill="#669B83" />
                    <circle cx="160" cy="160" r="131" fill="#F4F8F5" stroke="#C4D9CD" strokeWidth="2" />
                    <circle cx="160" cy="160" r="123" fill="none" stroke="#7BA58C" strokeWidth="1" />
                    {Array.from({ length: 72 }, (_, i) => <line key={i} x1="160" y1="38" x2="160" y2={i % 6 === 0 ? 49 : i % 3 === 0 ? 46 : 43} stroke="#79A28A" strokeWidth={i % 6 === 0 ? 1.5 : 1} transform={`rotate(${i * 5} 160 160)`} />)}
                    <circle cx="160" cy="160" r="109" fill="#FFFFFF" stroke="#99B9A4" strokeWidth="1.5" />
                    <g fill="#618A77" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="500" textAnchor="middle"><text x="160" y="77">N</text><text x="246" y="165">E</text><text x="160" y="253">S</text><text x="74" y="165">W</text></g>
                  </svg>
                  <div className="qibla-pointer" style={{ transform: `rotate(${294 - (compassHeading ?? 0)}deg)` }}><span /></div>
                  <img className="qibla-kaaba" src="/assets/qibla-kaaba.svg" alt="Ka'bah dalam perspektif tiga dimensi" width={88} height={88} />
                </div>
                <div className="qibla-bearing"><strong>294<span>°</span></strong><p>Arah Ka'bah di Barat Laut dari lokasimu</p><span className={`qibla-sensor-status ${compassHeading !== null ? "sensor-live" : ""}`}><i />{compassHeading !== null ? "Sensor kompas aktif" : "Panduan ITS · sensor belum aktif"}</span></div>
                <button className="primary qibla-calibrate" onClick={calibrateCompass}><Icon name="compass" size={18} /> Kalibrasi Kompas</button>
                <div className="qibla-guidance"><Icon name="compass" size={18} /><p>Pegang smartphone mendatar sampai jarum sejajar dengan Ka'bah.</p></div>
              </section>
              <section className="nearby-mosque"><div className="section-title"><h2>Masjid Terdekat</h2><span className="small-tag mint">SEKITAR KAMPUS</span></div><div className="nearby-mosque-card card"><span className="nearby-mosque-icon"><Icon name="moon" size={25} /></span><div><h3>Masjid Manarul Ilmi ITS</h3><p>350m <span>·</span> 4 menit jalan kaki</p><small>Perkiraan jarak dari area kampus ITS</small></div><a className="mosque-directions" href="https://www.google.com/maps/dir/?api=1&destination=Masjid+Manarul+Ilmi+ITS+Surabaya&travelmode=walking" target="_blank" rel="noopener noreferrer" aria-label="Petunjuk arah ke Masjid Manarul Ilmi ITS"><Icon name="arrow" size={19} /></a></div></section>
            </div>
          )}
          {screen === "Prayer Times" && <section className="prayer-times-page card"><h2>Waktu Sholat</h2><p>Sukolilo, Surabaya · Jadwal contoh</p>{prayers.map(([label, time, icon]) => <div className="prayer-time-row" key={label}><Icon name={icon as IconName} /><strong>{({ Fajr: "Subuh", Dhuhr: "Dzuhur", Asr: "Ashar", Maghrib: "Maghrib", Isha: "Isya" } as Record<string, string>)[label]}</strong><span>{time}</span><button className="icon-button" aria-label="Pengaturan pengingat sholat" onClick={() => { setAlarm(!alarm); setToast(alarm ? "Pengingat sholat dinonaktifkan" : "Pengingat sholat diaktifkan") }}><Icon name={alarm ? "bell" : "close"} size={18} /></button></div>)}</section>}
          {screen === "Calendar" && (
            <div className="calendar-page card">
              <div className="section-title">
                <h2>October 2025</h2>
                <span className="small-tag gold">Rabi Al-Thani 1447</span>
              </div>
              <div className="month-grid">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
                {Array.from({ length: 33 }, (_, i) =>
                  i < 2 ? (
                    <div key={i} />
                  ) : (
                    <button
                      className={day === i - 1 ? "selected" : ""}
                      key={i}
                      onClick={() => setDay(i - 1)}
                    >
                      {i - 1}
                    </button>
                  ),
                )}
              </div>
              <h3>October {day} · Your agenda</h3>
              <div className="calendar-agenda">
                <Icon name="school" />
                <div>
                  <strong>Advanced mathematics</strong>
                  <p>13:00–14:30 · Lab 2</p>
                </div>
              </div>
              <div className="calendar-agenda">
                <Icon name="moon" />
                <div>
                  <strong>Asr prayer</strong>
                  <p>14:58 · Campus mosque</p>
                </div>
              </div>
              <button className="primary" onClick={() => navigate("Study")}>
                Manage tasks
              </button>
            </div>
          )}
          {(screen === "Hadith" || screen === "Duas") && (
            <div className="spiritual-list">
              <div className="spiritual-banner">
                <Icon name={screen === "Hadith" ? "book" : "heart"} size={30} />
                <h2>
                  {screen === "Hadith"
                    ? "Wisdom for your everyday."
                    : "A prayer for every moment."}
                </h2>
                <p>Carry a little remembrance into your day.</p>
              </div>
              {(screen === "Hadith"
                ? [
                    [
                      "The power of intention",
                      "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
                      "Actions are judged by intentions.",
                      "Sahih al-Bukhari 1",
                    ],
                    [
                      "A kind word",
                      "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
                      "A good word is charity.",
                      "Sahih al-Bukhari 2989",
                    ],
                  ]
                : [
                    [
                      "Before studying",
                      "رَبِّ زِدْنِي عِلْمًا",
                      "My Lord, increase me in knowledge.",
                      "Quran · 20:114",
                    ],
                    [
                      "When rain falls",
                      "اللَّهُمَّ صَيِّبًا نَافِعًا",
                      "O Allah, make it beneficial rain.",
                      "Sahih al-Bukhari 1032",
                    ],
                    [
                      "For wellbeing",
                      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
                      "Our Lord, grant us good in this world and the Hereafter, and protect us from the punishment of the Fire.",
                      "Quran · 2:201",
                    ],
                  ]
              ).map(([label, arabic, translation, source]) => (
                <article className="card spiritual-card" key={label}>
                  <h3>{label}</h3>
                  <div className="arabic" lang="ar" dir="rtl">
                    {arabic}
                  </div>
                  <p>{translation}</p>
                  <div className="section-title">
                    <span className="muted-caption">{source}</span>
                    <button
                      className="text-link"
                      onClick={() => {
                        navigator.clipboard
                          ?.writeText(`${arabic}\n${translation}\n${source}`)
                          .then(() => setToast("Copied to clipboard"))
                          .catch(() =>
                            setToast(
                              "Clipboard is unavailable in this preview.",
                            ),
                          )
                      }}
                    >
                      Copy <Icon name="book" size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
          {screen === "Protector" && (
            <div className="protector-page">
              <header className="bmkg-header">
                <div><h1>Zikra Protector</h1><p>Rabu, 8 Oktober 2026</p></div>
                <button className="icon-button notification" aria-label="Notifikasi Protector" onClick={() => setToast("Demo: potensi hujan disertai petir siang ini. Cek BMKG untuk peringatan aktual.")}><Icon name="bell" /><i /></button>
              </header>
              <section className="bmkg-weather-card" aria-label="Cuaca Sukolilo, data contoh">
                <div className="bmkg-weather-left">
                  <img src="/assets/protector-weather.svg" alt="Ilustrasi matahari dan awan tiga dimensi" width={112} height={88} />
                  <h2>Cerah Berawan</h2>
                  <button className="bmkg-location-pill" onClick={() => setToast("Lokasi demo: Sukolilo, Surabaya. Deteksi lokasi belum terhubung.")}><Icon name="pin" size={13} /> Sukolilo, Surabaya <span>⌵</span></button>
                </div>
                <div className="bmkg-temperature"><strong>27<span>°C</span></strong><time>07:30 AM</time><span className="bmkg-weather-demo">DATA CONTOH</span></div>
              </section>
              <aside className="bmkg-warning">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 10 18H2Z" /><path d="M12 9v5m0 3v.1" /></svg>
                <div><h2>Peringatan Dini Cuaca!</h2><p>Potensi hujan disertai kilat/petir siang ini. Jangan lupa baca doa turun hujan.</p></div>
              </aside>
              <section className="bmkg-earthquake" aria-labelledby="bmkg-earthquake-title">
                <div className="section-title"><h2 id="bmkg-earthquake-title">Gempabumi Terkini</h2><a className="text-link" href="https://www.bmkg.go.id/gempabumi" target="_blank" rel="noopener noreferrer">Lihat Semua <Icon name="chevron" size={13} /></a></div>
                <div className="bmkg-mini-map">
                  <img className="bmkg-map-image" src="/assets/protector-java-map.svg" alt="Peta bergaya ilustrasi pulau Jawa, Bali, dan Laut Jawa" width={800} height={360} />
                  <span className="bmkg-map-demo">ILUSTRASI · DATA CONTOH</span>
                  <div className="bmkg-epicenter" aria-label="Penanda episentrum ilustratif"><span /><Icon name="pin" size={27} /></div>
                  <div className="bmkg-map-summary"><div><Icon name="pin" size={17} /><p><strong>28 km Barat Daya Laut Jawa</strong><span>Kedalaman 10 km</span></p></div><span className="bmkg-magnitude">4.5 <small>Mg</small></span></div>
                </div>
                <p className="bmkg-data-note">Cuaca & gempa adalah data contoh, bukan pemantauan BMKG langsung.</p>
              </section>
              <div className="bmkg-quick-actions">
                <a className="bmkg-action bmkg-family" href={`https://wa.me/?text=${encodeURIComponent("Alhamdulillah, aku aman di kampus, Sukolilo, Surabaya. Jangan khawatir ya.")}`} target="_blank" rel="noopener noreferrer">
                  <Icon name="send" size={17} /><span>Kabari Keluarga <small>(WhatsApp)</small></span>
                </a>
                <a className="bmkg-action bmkg-emergency" href="tel:112">
                  <Icon name="bell" size={17} /><span>Panggilan Darurat <small>(112)</small></span>
                </a>
              </div>
              <section className="protection-duas" aria-labelledby="protection-duas-title">
                <div className="section-title">
                  <div>
                    <h2 id="protection-duas-title">Ikhtiar & perlindungan</h2>
                    <p>Tenangkan hati. Tetap waspada.</p>
                  </div>
                  <span className="action-icon gold"><Icon name="book" size={22} /></span>
                </div>
                <p className="dua-audio-note">Audio menggunakan suara sintetis perangkat, bukan rekaman qari.</p>
                <div className="protection-dua-list">
                  {protectionDuas.slice(0, 1).map((dua) => (
                    <article className="card protection-dua" key={dua.title}>
                      <div className="section-title">
                        <h3>{dua.title}</h3>
                        <button
                          className={`dua-audio-button ${activeDua === dua.title ? "playing" : ""}`}
                          aria-label={`${activeDua === dua.title ? "Hentikan" : "Putar"} audio ${dua.title}`}
                          aria-pressed={activeDua === dua.title}
                          onClick={() => playProtectionDua(dua)}
                        >
                          <Icon name={activeDua === dua.title ? "pause" : "play"} size={18} />
                        </button>
                      </div>
                      <div className="arabic" lang="ar" dir="rtl">{dua.arabic}</div>
                      <p className="dua-meaning" lang="id">{dua.meaning}</p>
                      <div className="dua-source"><span>{dua.source}</span><p>{dua.note}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}
          <footer className="page-footer">
            <span className="brand-mini"><BrandMark />zikra.</span> A balanced day begins
            with a small intention.<span>MADE FOR YOUR EVERYDAY</span>
          </footer>
        </main>
      </div>
      <nav className="bottom-nav">
        {navItems.map(([label, icon]) => (
          <button
            className={`${screen === label ? "active" : ""} ${
              label === "Zikra AI" ? "center-ai" : ""
            }`}
            key={label}
            onClick={() => navigate(label)}
          >
            <span>
              <Icon name={icon} size={label === "Zikra AI" ? 25 : 21} />
            </span>
            <small>{label === "Zikra AI" ? "Zikra AI" : label}</small>
          </button>
        ))}
      </nav>
      {toast && (
        <div className="toast" role="status">
          <Icon name="check" size={19} />
          {toast}
          <button aria-label="Dismiss" onClick={() => setToast("")}>
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
      {onboarding >= 0 && (
        <div className={`onboarding ${onboarding === 0 ? "cosmic" : ""}`}>
          <div className="onboarding-top">
            <button
              className="icon-button"
              aria-label="Go back"
              onClick={() =>
                onboarding > 0
                  ? setOnboarding(onboarding - 1)
                  : setOnboarding(-1)
              }
            >
              <Icon name="back" />
            </button>
            <span className="onboarding-brand"><BrandMark appIcon /><strong>zikra.</strong></span>
            <button className="text-link" onClick={() => setOnboarding(-1)}>
              Skip
            </button>
          </div>
          <div className="onboarding-body">
            {onboarding === 0 ? (
              <>
                <div className="cosmic-art">
                  <div className="orbit-ring" />
                  <div className="orbit-ring" />
                  <div className="orbit-ring" />
                  <span className="orbit-center">
                    <BrandMark appIcon />
                  </span>
                  <span className="orbit-token one">
                    <Icon name="book" size={30} />
                  </span>
                  <span className="orbit-token two">
                    <Icon name="school" size={30} />
                  </span>
                  <span className="orbit-token three">
                    <Icon name="spark" size={26} />
                  </span>
                  <span className="orbit-token four">
                    <Icon name="heart" size={24} />
                  </span>
                </div>
                <span className="eyebrow">FAITH. FOCUS. A LITTLE HELP.</span>
                <h1>
                  Find your balance.
                  <br />
                  Make your days matter.
                </h1>
                <p>
                  A thoughtful companion for your prayers,
                  <br />
                  your studies, and everything in between.
                </p>
              </>
            ) : onboarding === 1 ? (
              <>
                <span className="eyebrow">STEP 02 / 03</span>
                <h1>Who are you?</h1>
                <p>Let’s shape Zikra around your everyday.</p>
                <div className="role-grid">
                  {[
                    "University student",
                    "High school student",
                    "Middle school student",
                    "Lifelong learner",
                  ].map((r, i) => (
                    <button
                      className={`role-card ${role === r ? "selected" : ""}`}
                      key={r}
                      onClick={() => setRole(r)}
                    >
                      <span className={`role-icon ${i % 2 ? "gold" : "mint"}`}>
                        <Icon name={i === 3 ? "book" : "school"} size={40} />
                      </span>
                      <h3>{r}</h3>
                      <p>
                        {
                          [
                            "Classes, credits & campus life",
                            "Classes today, dreams tomorrow",
                            "Good habits start here",
                            "A little learning, every day",
                          ][i]
                        }
                      </p>
                      {role === r && (
                        <span className="role-check">
                          <Icon name="check" size={15} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="eyebrow">STEP 03 / 03</span>
                <h1>What matters to you?</h1>
                <p>
                  Pick the habits you’d like to grow.
                  <br />
                  Every small intention counts.
                </p>
                <div className="habit-goals">
                  {[
                    "Pray on time",
                    "Read Quran daily",
                    "Stay on top of homework",
                    "Learn with AI",
                    "Wake up for Fajr",
                    "Daily duas",
                    "Find my study focus",
                  ].map((g, i) => (
                    <button
                      className={goals.includes(g) ? "selected" : ""}
                      key={g}
                      onClick={() =>
                        setGoals((gs) =>
                          gs.includes(g)
                            ? gs.filter((a) => a !== g)
                            : [...gs, g],
                        )
                      }
                    >
                      <Icon
                        name={
                          [
                            "moon",
                            "book",
                            "tasks",
                            "spark",
                            "sun",
                            "heart",
                            "compass",
                          ][i] as IconName
                        }
                        size={20}
                      />
                      {g}
                      {goals.includes(g) && <Icon name="check" size={17} />}
                    </button>
                  ))}
                </div>
                <span className="muted-caption">
                  You can always change these later.
                </span>
              </>
            )}
          </div>
          <div className="onboarding-bottom">
            <div className="step-dots">
              {[0, 1, 2].map((i) => (
                <i className={i === onboarding ? "active" : ""} key={i} />
              ))}
            </div>
            <button
              className="primary"
              onClick={() =>
                onboarding < 2
                  ? setOnboarding(onboarding + 1)
                  : (setOnboarding(-1),
                    navigate("Home"),
                    setToast("Welcome to your journey, Arkan."))
              }
            >
              {onboarding === 0
                ? "Begin your journey"
                : onboarding === 1
                  ? "Continue"
                  : "Let’s make today meaningful"}
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
