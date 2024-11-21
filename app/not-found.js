import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col text-textColor justify-center items-center min-h-[calc(100vh-64px)]">
      <h2 className="text-2xl">Page Not Found</h2>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
