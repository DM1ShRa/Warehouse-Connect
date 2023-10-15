import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Warehouse Connect. All rights reserved.</p>
          <ul className="footer-links">
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
              <Link href="/Contact">
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
