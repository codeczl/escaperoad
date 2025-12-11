// src/app/about/page.tsx
import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { seoTemplates } from "../../config/site";

export const metadata: Metadata = {
  title: seoTemplates.static.about.title,
  description: seoTemplates.static.about.description,
  keywords: seoTemplates.static.about.keywords,
};

export default function AboutPage() {
  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>About Us</h1>
          <div className="content-box-dark">
            <p>
              Welcome to Veck FPS Hub, your destination for free online FPS and action games. 
              We provide a curated collection of browser-based games that you can play instantly without downloads.
            </p>
            
            <h2>What We Offer</h2>
            <p>
              Play Veck and other amazing FPS shooter games directly in your browser. 
              All games are free, mobile-friendly, and require no installation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}