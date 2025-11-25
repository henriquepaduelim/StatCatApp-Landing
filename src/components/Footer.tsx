
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book a Demo', href: '#cta' },
  ];

  const socialLinks = [
    { icon: faTwitter, href: '#' },
    { icon: faFacebook, href: '#' },
    { icon: faLinkedin, href: '#' },
  ];

  return (
    <footer className="bg-navy border-t border-warm-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white font-grotesk">StatCat</h3>
                <p className="text-warm-gray-500 mt-1">The All-In-One Football Club Platform</p>
            </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-warm-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-warm-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-warm-gray-800 pt-6 text-center text-sm text-warm-gray-500">
          <p>&copy; {new Date().getFullYear()} StatCat. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
