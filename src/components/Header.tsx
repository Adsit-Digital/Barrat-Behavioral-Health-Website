import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/OptimizedImage";
const specialties = [
  { title: "ADHD Care", href: "/adhd-care" },
  { title: "PTSD Care", href: "/ptsd-care" },
  { title: "Trauma Care", href: "/trauma-care" },
  { title: "Mental Health Care", href: "/mental-health-care" },
  { title: "Mood Disorders", href: "/mood-disorders" },
  { title: "Anxiety Disorders", href: "/anxiety-disorders" },
  { title: "Sleep Concerns & Psychosomatic Symptoms", href: "/sleep-concerns" },
  { title: "Immigrant & Refugee Psychological Support", href: "/immigrant-refugee-support" },
  { title: "Medical Weight Loss Management", href: "/medical-weight-loss" },
];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [patientsSayOpen, setPatientsSayOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`${isHomePage ? 'static' : 'sticky top-0'} z-50 w-full sm:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative`}>
      
      <div className="container max-w-container h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Increased by 35% */}
        <Link to="/" className="flex flex-col items-center flex-shrink-0 min-w-0" aria-label="Barrat Behavioral Health & Primary Care Home">
          <OptimizedImage 
            src="https://media.barratbhandconsulting.com/Barratbhand-consulting%20main-logo.png" 
            alt="Barrat Behavioral Health & Primary Care - Mental Health Services Woodbridge VA" 
            className="h-10 sm:h-12 md:h-14 w-auto" 
            priority={true}
            width={200}
            height={56}
          />
        </Link>
        
        {/* Centered Navigation Menu */}
        <NavigationMenu className="hidden md:flex flex-1 justify-center relative z-50">
          <NavigationMenuList className="flex items-center justify-center space-x-2">
            <NavigationMenuItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Home"
              >
                Home
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="About"
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/meet-our-team"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Meet Our Team"
              >
                Meet Our Team
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="View our specialties">
                Our Specialties
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                  {specialties.map((component) => (
                    <ListItem key={component.title} to={component.href} title={component.title} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Blog"
              >
                Blog
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="What Our Patients Say">
                What Our Patients Say
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 bg-white">
                  <ListItem to="/what-our-patients-say" title="What Our Patients Say">
                    Read stories and feedback from our patients
                  </ListItem>
                  <ListItem to="/testimonials" title="Testimonials">
                    View patient testimonials and reviews
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/referrals"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Referrals"
              >
                Referrals
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Book Appointment Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button asChild className="hidden md:inline-flex bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg px-6 py-3 transition-colors">
            <Link to="/contact" aria-label="Book an appointment">
              Book Appointment
            </Link>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden min-w-[44px] min-h-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container max-w-container px-4 py-6 grid gap-4 text-base font-medium">
            <Link 
              to="/" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Home"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="About"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/meet-our-team" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Meet Our Team"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meet Our Team
            </Link>
            <Link 
              to="/services" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Services"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            
            {/* Our Specialties Section */}
            <div className="border-l-2 border-brand-orange/20 pl-4">
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className="text-sm font-semibold text-brand-orange mb-2 flex items-center gap-2 hover:text-brand-orange/80 transition-colors"
                aria-label="Toggle Our Specialties"
              >
                Our Specialties
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    specialtiesOpen && "rotate-180"
                  )}
                />
              </button>
              {specialtiesOpen && (
                <div className="space-y-1">
                  {specialties.map((specialty) => (
                    <Link 
                      key={specialty.title}
                      to={specialty.href} 
                      className="hover:text-brand-orange transition-colors py-2 px-3 pl-6 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5 text-sm" 
                      aria-label={specialty.title}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      ↳ {specialty.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/blog" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            {/* What Our Patients Say Section */}
            <div className="border-l-2 border-brand-orange/20 pl-4">
              <button
                onClick={() => setPatientsSayOpen(!patientsSayOpen)}
                className="text-sm font-semibold text-brand-orange mb-2 flex items-center gap-2 hover:text-brand-orange/80 transition-colors"
                aria-label="Toggle What Our Patients Say"
              >
                What Our Patients Say
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    patientsSayOpen && "rotate-180"
                  )}
                />
              </button>
              {patientsSayOpen && (
                <div className="space-y-1">
                  <Link 
                    to="/what-our-patients-say" 
                    className="hover:text-brand-orange transition-colors py-2 px-3 pl-6 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5 text-sm" 
                    aria-label="What Our Patients Say"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ↳ What Our Patients Say
                  </Link>
                  <Link 
                    to="/testimonials" 
                    className="hover:text-brand-orange transition-colors py-2 px-3 pl-6 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5 text-sm" 
                    aria-label="Testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ↳ Testimonials
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/referrals" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Referrals"
              onClick={() => setMobileMenuOpen(false)}
            >
              Referrals
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-brand-orange transition-colors py-2 px-3 min-h-[44px] flex items-center rounded-md hover:bg-brand-orange/5" 
              aria-label="Contact Us"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              asChild 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg px-6 py-3 transition-colors mt-4 min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact" aria-label="Book an appointment">
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      )}
      
      {/* Header Curve - only on home page */}
      {isHomePage && (
        <div className="absolute top-20 left-0 right-0 z-10 pointer-events-none -mt-2 md:mt-0">
          <OptimizedImage
            src="https://media.barratbhandconsulting.com/header-curve1.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-[clamp(64px,10vw,100px)] object-fill"
            priority={true}
            sizes="100vw"
          />
        </div>
      )}
    </header>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; children?: React.ReactNode }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-orange/10 hover:text-primary-blue focus:bg-brand-orange/10 focus:text-primary-blue text-dark-text",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-heading">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-gray font-body">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";