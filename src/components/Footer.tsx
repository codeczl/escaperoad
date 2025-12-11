// app/components/Footer.tsx
"use client";

import { useRouter } from "next/navigation";
import { siteConfig } from "../config/site";

export function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Logo区域 */}
        <div className="footer-logo">
          <h2 onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            {siteConfig.name}
          </h2>
          <p className="footer-tagline">
            {siteConfig.tagline}
          </p>
        </div>

        {/* 导航链接 */}
        <div className="footer-nav">
          <a href="/about" onClick={(e) => { e.preventDefault(); router.push("/about"); }}>
            About Us
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); router.push("/contact"); }}>
            Contact Us
          </a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); router.push("/privacy"); }}>
            Privacy Policy
          </a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); router.push("/terms"); }}>
            Terms Of Use
          </a>
          <a href="/copyright" onClick={(e) => { e.preventDefault(); router.push("/copyright"); }}>
            Copyright
          </a>
        </div>

        {/* 版权信息 */}
        <div className="footer-disclaimer">
          <p>© {currentYear} {siteConfig.name} Game Hub. All rights reserved.</p>
          <p>
            All games are copyrighted or trademarked by their respective owners or authors. 
            We are not affiliated with any game developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
