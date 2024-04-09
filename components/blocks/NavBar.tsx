import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <header className="fixed top-0 bg-zinc-100/90 backdrop-blur-lg border-b w-full hidden md:block z-50">
      <nav className="container w-full flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-md">
          Carlos Cruz
        </Link>
        <ul className="flex items-center gap-8 text-sm">
          <li>
            <Link href="/#about">Acerca De</Link>
          </li>
          <li>
            <Link href="/#methodology">Metodología</Link>
          </li>
          <li>
            <Link href="/#experience">Experiencia</Link>
          </li>
          <li>
            <Link href="/resources">Recursos</Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/carlos-ilhuilcamina-cruz-ceron-2a9112115/"
            target="_blank"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                className="fill-dark"
              />
            </svg>
          </Link>

          <Button size="sm" asChild>
            <Link href="#contact" className="gap-2 text-sm">
              Contacto
              <ArrowRightIcon className="w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
