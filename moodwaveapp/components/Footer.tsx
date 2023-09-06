import Link from "next/link"

export default function Footer() {
    return (
      <footer className="border-t border-b-foreground/10 text-center text-pink p-5">
        Hecho con ❤️ por &nbsp;
        <Link href={'https://www.linkedin.com/in/mafe-dev/'} target="_blank" className="font-bold">
            Mafe Cárdenas
        </Link>
      </footer>
    )
  }