import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navItems: NavItem[] = [
    {
      title: 'Products',
      dropdown: [
        {
          title: 'Spotter Lens',
          description: 'Market intelligence at your fingertips',
          href: 'https://spotter.ai/lens'
        },
        {
          title: 'Spotter TMS', 
          description: 'Recruiting engine with visibility',
          href: 'https://spotter.ai/tms'
        },
        {
          title: 'Driver App',
          description: 'Load optimization made simple',
          href: '/products/driver-app'
        },
        {
          title: 'Spotter Sentinel',
          description: 'Safety automation and scoring',
          href: 'https://spotter.ai/sentinel'
        },
        {
          title: 'Browser Extension',
          description: 'Load board automation',
          href: 'https://extension.spotter.ai/?_gl=1*9psn5b*_gcl_au*Mzc3NDc4OTU3LjE3NTY0Njk4MjA.'
        }
      ]
    },
    {
      title: 'Solutions',
      dropdown: [
        {
          title: 'For Carriers',
          description: 'Complete trucking automation suite',
          href: '#'
        },
        {
          title: 'For Brokers',
          description: 'Freight brokerage optimization',
          href: '#'
        },
        {
          title: 'For Shippers',
          description: 'Supply chain visibility',
          href: '#'
        }
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        {
          title: 'Documentation',
          description: 'API docs and integration guides',
          href: '#'
        },
        {
          title: 'Blog',
          description: 'Industry insights and updates',
          href: '#'
        },
        {
          title: 'Case Studies',
          description: 'Customer success stories',
          href: '#'
        },
        {
          title: 'Support',
          description: 'Get help when you need it',
          href: '/resources/support'
        }
      ]
    },
    {
      title: 'Company',
      dropdown: [
        {
          title: 'About Us',
          description: 'Our mission and vision',
          href: 'https://www.facebook.com/people/Spotter-Sentinel/61577984011373/'
        },
        {
          title: 'Careers',
          description: 'Join our growing team',
          href: '#'
        },
        {
          title: 'Contact',
          description: 'Get in touch with us',
          href: '#'
        }
      ]
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isDropdownClick = Object.values(dropdownRefs.current).some(
        ref => ref?.contains(target)
      );
      
      if (!isDropdownClick) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (navItems.find(item => item.title === title)?.dropdown) {
      setActiveDropdown(title);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-foreground">spotter</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
                ref={el => dropdownRefs.current[item.title] = el}
              >
                {item.dropdown ? (
                  <>
                    <button className="nav-link flex items-center space-x-1 text-sm font-medium text-muted-foreground">
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-nav-dropdown backdrop-blur-xl border border-border/20 rounded-lg shadow-dropdown p-2 animate-in slide-in-from-top-1 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block p-3 rounded-md hover:bg-nav-hover transition-colors duration-200 group"
                          >
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {dropdownItem.title}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {dropdownItem.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="nav-link text-sm font-medium text-muted-foreground"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Log in
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/20 py-4 space-y-4 animate-in slide-in-from-top-1 duration-200">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setActiveDropdown(
                        activeDropdown === item.title ? null : item.title
                      )}
                      className="flex items-center justify-between w-full text-left text-sm font-medium text-muted-foreground"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4 space-y-2 animate-in slide-in-from-top-1 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border/20 space-y-2">
              <a
                href="/login"
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Log in
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
