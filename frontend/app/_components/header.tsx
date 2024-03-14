import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center bg-[#363538]">
      <Link href="/">
        <Image src="/uol_icon.png" alt="UOL logo" width={48} height={48} />
      </Link>
      <h1 className="text-3xl font-extrabold text-white">UOL</h1>
    </header>
  );
};
