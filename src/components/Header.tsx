import { Link, NavLink } from "react-router-dom";
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
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
const specialties = [
  { title: "ADHD Care", href: "/services" },
  { title: "PTSD Care", href: "/services" },
  { title: "Trauma Care", href: "/services" },
  { title: "Mental Health Care", href: "/services" },
  { title: "Mood Disorders", href: "/services" },
  { title: "Anxiety Disorders", href: "/services" },
  { title: "Sleep Concerns & Psychosomatic Symptoms", href: "/services" },
  { title: "Immigrant & Refugee Psychological Support", href: "/services" },
  { title: "Medical Weight Loss Management", href: "/services" },
];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full sm:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      <div className="container max-w-container h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Increased by 35% */}
        <Link to="/" className="flex items-center flex-shrink-0" aria-label="Barrat Behavioral Health and Primary Care Home">
          <img src="https://media.inboundwizard.com/Barratbhand-consulting%20main-logo.png" alt="Barrat Behavioral Health Logo" className="h-14 w-auto" />
        </Link>
        
        {/* Centered Navigation Menu */}
        <NavigationMenu className="hidden md:flex flex-1 justify-center">
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
              <NavigationMenuTrigger aria-label="View our specialties">Our Specialties</NavigationMenuTrigger>
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
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Testimonials"
              >
                Testimonials
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-brand-orange font-semibold")
                }
                aria-label="Contact Us"
              >
                Contact Us
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
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container max-w-container px-4 py-6 grid gap-6 text-lg font-medium">
            <Link 
              to="/" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="Home"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="About"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="Services"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="Blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/testimonials" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="Testimonials"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-brand-orange transition-colors" 
              aria-label="Contact Us"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              asChild 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg px-6 py-3 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact" aria-label="Book an appointment">
                Book Appointment
              </Link>
            </Button>
          </nav>
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