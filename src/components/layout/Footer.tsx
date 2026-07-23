// import Link from "next/link";
// import { Container } from "@/components/ui/Container";
// import { navigationData } from "@/lib/data/navigation";
// import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             <Link href="/" className="font-bold text-2xl text-white tracking-tight block">
//               Accredian
//             </Link>
//             <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
//               Empowering professionals with top-tier education and strategic skill enhancement for the modern enterprise.
//             </p>
//             <div className="flex items-center gap-4 pt-2">
//               <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
//                 <Linkedin size={20} />
//               </a>
//               <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg">Quick Links</h3>
//             <ul className="space-y-2">
//               {navigationData.map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} className="text-sm hover:text-white transition-colors inline-block py-1">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3 text-sm">
//                 <Mail size={18} className="shrink-0 mt-0.5 text-blue-400" />
//                 <a href="mailto:admissions@accredian.com" className="hover:text-white transition-colors">
//                   admissions@accredian.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <Phone size={18} className="shrink-0 mt-0.5 text-blue-400" />
//                 <a href="tel:+1234567890" className="hover:text-white transition-colors">
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <MapPin size={18} className="shrink-0 mt-0.5 text-blue-400" />
//                 <span>
//                   123 Innovation Drive,<br />
//                   Tech City, TC 10101
//                 </span>
//               </li>
//             </ul>
//           </div>
          
//           {/* Legal */}
//           <div className="space-y-4">
//             <h3 className="text-white font-semibold text-lg">Legal</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="text-sm hover:text-white transition-colors inline-block py-1">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-sm hover:text-white transition-colors inline-block py-1">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-sm hover:text-white transition-colors inline-block py-1">
//                   Cookie Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
//           <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
//           <p>Designed for Enterprise Excellence.</p>
//         </div>
//       </Container>
//     </footer>
//   );
// }
