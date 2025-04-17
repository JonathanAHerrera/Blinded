import { useRouter } from "next/navigation";

export default function ExitButton() {
    const router = useRouter();

  return (
    <button className={`absolute top-8 left-8 z-100 text-neutral-50 text-2xl`} style={{ fontFamily: "var(--font-sue-ellen-francisco)" }}
        onClick={() => {router.push("/")}}>
        <span className="relative -top-1">←</span> EXIT
    </button>
  );
}
