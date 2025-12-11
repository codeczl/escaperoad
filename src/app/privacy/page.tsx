// src/app/privacy/page.tsx
"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>Privacy Policy</h1>
          <div className="content-box-dark">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>Information We Collect</h2>
            <p>
              We are committed to protecting your privacy. We may collect the following information:
            </p>
            <ul>
              <li>Usage data and analytics to improve our service</li>
              <li>Browser information for compatibility purposes</li>
              <li>IP address for security and analytics</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and maintain our gaming service</li>
              <li>Improve user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Ensure website security</li>
            </ul>
            
            <h2>Cookies</h2>
            <p>
              We may use cookies to enhance your browsing experience. You can 
              choose to disable cookies in your browser settings, though this 
              may affect some website functionality.
            </p>
            
            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. 
              We are not responsible for the privacy practices of these external sites.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us 
              through our contact page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}