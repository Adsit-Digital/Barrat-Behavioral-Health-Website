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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      {/* Curvy Orange Line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary-orange" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
      }}></div>
      
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
                  cn(navigationMenuTriggerStyle(), isActive && "text-primary-orange font-semibold")
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
                  cn(navigationMenuTriggerStyle(), isActive && "text-primary-orange font-semibold")
                }
                aria-label="About"
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="View our specialties">Our Specialties</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                  cn(navigationMenuTriggerStyle(), isActive && "text-primary-orange font-semibold")
                }
                aria-label="Blog"
              >
                Blog
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), isActive && "text-primary-orange font-semibold")
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
          <Button asChild className="hidden md:inline-flex bg-primary-orange hover:bg-primary-orange/90 text-white rounded-lg px-6 py-3 transition-colors">
            <Link to="/contact" aria-label="Book an appointment">
              Book Appointment
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link to="/" className="hover:text-primary-orange transition-colors" aria-label="Home">Home</Link>
                <Link to="/about" className="hover:text-primary-orange transition-colors" aria-label="About">About</Link>
                <Link to="/services" className="hover:text-primary-orange transition-colors" aria-label="Services">Services</Link>
                <Link to="/blog" className="hover:text-primary-orange transition-colors" aria-label="Blog">Blog</Link>
                <Link to="/contact" className="hover:text-primary-orange transition-colors" aria-label="Contact Us">Contact Us</Link>
                <Button asChild className="bg-primary-orange hover:bg-primary-orange/90 text-white rounded-lg px-6 py-3 transition-colors mt-4">
                  <Link to="/contact" aria-label="Book an appointment">
                    Book Appointment
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-orange/10 hover:text-primary-blue focus:bg-primary-orange/10 focus:text-primary-blue text-dark-text",
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