import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  pb-20 gap-16 bg-hero bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
      <h1
        className={`text-primary font-bold text-4xl md:text-6xl lg:text-8xl ${playFairDisplay.className}`}
      >
        Work in Progress
      </h1>
      <p className="text-center">
        Check back from time to time to view the progress. You can view my other
        projects{" "}
        <Link
          href={"https://github.com/Explorarthecreator"}
          className="underline text-primary"
        >
          here
        </Link>
      </p>
    </div>
  );
}
