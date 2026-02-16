import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg accent-gradient flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-display text-xl font-bold">EDUPATH</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Helping students make informed academic and career decisions with clear progression paths.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-accent">Courses</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/courses/btech" className="hover:text-accent transition-colors">B.Tech</Link></li>
            <li><Link to="/courses/bpharmacy" className="hover:text-accent transition-colors">B.Pharmacy</Link></li>
            <li><Link to="/courses/bba" className="hover:text-accent transition-colors">BBA</Link></li>
            <li><Link to="/courses/ca-cma" className="hover:text-accent transition-colors">CA / CMA</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/campus-life" className="hover:text-accent transition-colors">Campus Life</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-accent">Connect</h4>
          <p className="text-sm text-primary-foreground/70">Have questions about your career path?</p>
          <Link to="/contact" className="inline-block mt-2 text-sm text-accent hover:underline">
            Get in touch →
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} EDUPATH. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
