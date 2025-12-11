// src/app/terms/page.tsx
"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function TermsPage() {
  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>Terms of Use</h1>
          <div className="content-box-dark">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
            
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the games on this website 
              for personal, non-commercial transitory viewing only.
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              The games and materials on this website are provided on an 'as is' basis. 
              To the fullest extent permitted by law, this website excludes all 
              representations, warranties, conditions and terms.
            </p>
            
            <h2>Limitations</h2>
            <p>
              In no event shall Steal Brainrot or its suppliers be liable for any 
              damages arising out of the use or inability to use the games on this website.
            </p>
            
            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, 
              typographical, or photographic errors. We do not warrant that any 
              of the materials are accurate, complete, or current.
            </p>
            
            <h2>Modifications</h2>
            <p>
              We may revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the then 
              current version of these terms of service.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}