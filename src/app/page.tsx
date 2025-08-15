import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-3.5 sm:p-20 ">
      <ThemeToggle />
      <div className="text-7xl font-bold">
        <span>Hello</span>{" "}
        <span className="text-orange-400">Dev Community🔥...</span>
      </div>
      <div>
        Made with 🧡 by{" "}
        <a
          href="linkedin.com/in/thesakshijaiswal"
          className="hover:text-orange-400"
        >
          {" "}
          Sakshi Jaiswal
        </a>
      </div>
    </div>
  );
}
