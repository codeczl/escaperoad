// src/app/copyright/page.tsx
"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { siteConfig } from "../../config/site";

export default function CopyrightPage() {
  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>Copyright & DMCA</h1>
          <div className="content-box-dark">
            <h2>Copyright Notice</h2>
            <p>
              All games hosted on this website are the property of their respective 
              owners and developers. We respect intellectual property rights and 
              comply with the Digital Millennium Copyright Act (DMCA).
            </p>
            
            <h2>DMCA Takedown Requests</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way 
              that constitutes copyright infringement and is accessible on this site, 
              please notify us immediately.
            </p>
            
            <h3>To file a DMCA takedown request, please provide:</h3>
            <ul>
              <li>Your contact information (name, address, phone, email)</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information in the notification is accurate</li>
              <li>Your physical or electronic signature</li>
            </ul>
            
            <h2>Contact for DMCA Requests</h2>
            <p>
              <strong>Email:</strong> {siteConfig.email.dmca}<br/>
              <strong>Subject Line:</strong> DMCA Takedown Request
            </p>
            
            <h2>Response Time</h2>
            <p>
              We will respond to valid DMCA takedown requests within 24-48 hours. 
              Upon receiving a valid request, we will promptly remove or disable 
              access to the allegedly infringing material.
            </p>
            
            <h2>Fair Use</h2>
            <p>
              We believe that the games hosted on our platform may qualify as fair use 
              under copyright law. However, we respect the rights of copyright holders 
              and will remove content upon valid request.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}