// src/app/contact/page.tsx
import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { siteConfig, seoTemplates } from "../../config/site";

export const metadata: Metadata = {
  title: seoTemplates.static.contact.title,
  description: seoTemplates.static.contact.description,
  keywords: seoTemplates.static.contact.keywords,
};

export default function ContactPage() {
  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>Contact Us</h1>
          <div className="content-box-dark">
            <p>
              We value your feedback and are here to help! If you have any questions, 
              suggestions, or concerns, please don't hesitate to reach out to us.
            </p>
            
            <h2>Get in Touch</h2>
            <p>
              <strong>Email:</strong> {siteConfig.email.contact}<br/>
              <strong>Response Time:</strong> We typically respond within 24-48 hours
            </p>
            
            <h2>What You Can Contact Us About</h2>
            <ul>
              <li>Game suggestions or requests</li>
              <li>Technical issues or bugs</li>
              <li>Copyright or DMCA concerns</li>
              <li>General feedback about our website</li>
              <li>Partnership opportunities</li>
            </ul>
            
            <h2>Before You Contact Us</h2>
            <p>
              Please check our FAQ section and make sure your browser is up to date. 
              Many common issues can be resolved by clearing your browser cache or 
              trying a different browser.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}