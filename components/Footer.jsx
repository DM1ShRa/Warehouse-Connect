import React from 'react';
import Link from 'next/link';  // Import Link from next

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 Warehouse Connect. All rights reserved.</p>
          <ul className="footer-links">
            {/* Use Link component for client-side navigation */}
            <li>
              <Link href="/Terms">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/PrivacyPolicy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/ContactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
