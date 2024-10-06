import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const footerLinks = [
  { name: 'Business Services', href: '/sectors-we-serve' },
  { name: 'Tax Services', href: '/tax-services' },
  { name: 'Accounting Services', href: '/accounting-services' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#3b445f] shadow-sm ">
      <div className="px-8 lg:px-12 py-8 mx-auto max-w-wrapper">
        <div className="flex flex-col items-center justify-center  space-y-4">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 space-x-6">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-white hover:underline">{link.name}</a>
              </Link>
            ))}
          </div>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <Link href="https://twitter.com" passHref>
              <a className="text-white">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>
            <Link href="https://instagram.com" passHref>
              <a className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com" passHref>
              <a className="text-white">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>
          </div>
          <div className="border-t-4 border-zinc-200 pt-8 text-center">
            <p className="text-white">
              &copy; 2024 UK Accountants. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
