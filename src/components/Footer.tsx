import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { content } from '@/content';

const iconMap: { [key: string]: any } = {
  twitter: faTwitter,
  facebook: faFacebook,
  linkedin: faLinkedin,
};

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-warm-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-black font-grotesk">{content.header.logo}</h3>
                <p className="text-warm-gray-500 mt-1">{content.footer.tagline}</p>
            </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {content.footer.navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-warm-gray-800 hover:text-teal transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex justify-center space-x-6">
            {content.footer.socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-warm-gray-500 hover:text-teal transition-colors">
                <FontAwesomeIcon icon={iconMap[social.name]} size="lg" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-warm-gray-800 pt-6 text-center text-sm text-warm-gray-500">
          <p>{content.footer.copyright.replace('StatCat.', `© ${new Date().getFullYear()} StatCat.`)}</p>
          <p className="mt-1">
            {content.footer.legalLinks.map((link, index) => (
              <span key={link.name}>
                <a href={link.href} className="hover:underline">{link.name}</a>
                {index < content.footer.legalLinks.length - 1 && ' | '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;