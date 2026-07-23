import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { navigationData } from "@/lib/data/navigation";
import { DESIGN_TOKENS } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
      <Container>
        <div
          className={`flex items-center ${DESIGN_TOKENS.navigation.height}`}
        >
          {/* Left Section */}
          <div className={`${DESIGN_TOKENS.navigation.logoArea} ${DESIGN_TOKENS.navigation.logoMargin} shrink-0`}>
            <Link
              href="#home"
              aria-label="Accredian Home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Accredian"
                width={115}
                height={30}
                priority
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden flex-1 items-center justify-between gap-5 lg:flex mx-12"
            aria-label="Primary Navigation"
          >
            {navigationData.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[16px] font-medium text-slate-900 transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="ml-auto lg:hidden">
            <MobileNav navigationData={navigationData} />
          </div>
        </div>
      </Container>
    </header>
  );
}