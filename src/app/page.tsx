import Link from "next/link";

export default function Home() {
  const deadline = new Date("2025-06-21T00:00:00Z");
  const now = new Date();
  const daysLeft = Math.ceil(
    (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );

  const countdownText =
    daysLeft > 1
      ? `in ${daysLeft} days`
      : daysLeft === 1
        ? "in 1 day"
        : "today";

  return (
    <main>
      <h1 className="text-xl">Hi @Perplexity</h1>
      <p>my inbox is open hi@sarg.am</p>
      {daysLeft >= 0 ? (
        <p>
          else this website will point to either{" "}
          <Link href="https://getlucid.app/">Lucid</Link> or{" "}
          <Link href="https://scira.ai">Scira</Link> {countdownText}
        </p>
      ) : (
        <p>
          This website now points to either{" "}
          <Link href="https://getlucid.app/">Lucid</Link> or{" "}
          <Link href="https://scira.ai">Scira</Link>
        </p>
      )}
    </main>
  );
}
