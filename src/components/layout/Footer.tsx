import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { footerColumns, socialLinks } from "@/lib/data/footer";

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Accredian Home" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Accredian"
                width={130}
                height={35}
                className="h-auto"
              />
            </Link>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">
              Enquire Now
            </Button>
            <span className="text-sm text-slate-600">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="border-slate-300" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {footerColumns.map((col, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-slate-900 text-lg">{col.title}</h3>
              {col.links && (
                <ul className="space-y-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="text-slate-700 hover:text-blue-600 transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {col.contact && (
                <div className="space-y-4 text-sm text-slate-700">
                  <p>
                    {col.contact.emailLabel}{" "}
                    <a href={`mailto:${col.contact.email}`} className="text-blue-600 hover:underline">
                      {col.contact.email}
                    </a>
                  </p>
                  <p className="leading-relaxed">
                    {col.contact.addressLabel} {col.contact.address}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <hr className="border-slate-300" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-slate-700 pt-8">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

