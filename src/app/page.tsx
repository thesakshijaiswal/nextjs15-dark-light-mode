import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen gap-3.5">
      <ThemeToggle />
      <div className="lg:text-7xl font-bold md:text-6xl sm:text-5xl text-2xl">
        <span>Hello</span>{" "}
        <span className="text-orange-400">Dev Community🔥...</span>
      </div>
      <div className="text-sm md:text-base">
        Made with 🧡 by{" "}
        <a
          href="https://www.linkedin.com/in/thesakshijaiswal"
          target="blank"
          className="hover:text-orange-400"
        >
          {" "}
          Sakshi Jaiswal
        </a>
      </div>
    </div>
  );
}
