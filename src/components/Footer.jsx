import { site } from '../data/site';
import Icon from './Icon';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="muted">&copy; {new Date().getFullYear()} {site.location}. Built with React and Vite.</p>
        </div>
        <SocialLinks className="footer-social" />
        <a className="to-top" href="#top"><Icon name="arrowUp" />Back to top</a>
      </div>
    </footer>
  );
}
