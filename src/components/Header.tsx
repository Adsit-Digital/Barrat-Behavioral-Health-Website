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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Barrat Behavioral Health and Primary Care Home">
          <img src="https://media.barratbhandconsulting.com/Barratbhand-consulting%20main-logo.png" alt="Barrat Behavioral Health Logo" className="h-10 w-auto" />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg px-6 py-3 transition-colors">
            <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" aria-label="Book an appointment">
              Book Appointment
            </a>
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
                <Link to="/" className="hover:text-brand-orange transition-colors" aria-label="Home">Home</Link>
                <Link to="/about" className="hover:text-brand-orange transition-colors" aria-label="About">About</Link>
                <Link to="/services" className="hover:text-brand-orange transition-colors" aria-label="Services">Services</Link>
                <Link to="/blog" className="hover:text-brand-orange transition-colors" aria-label="Blog">Blog</Link>
                <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg px-6 py-3 transition-colors mt-4">
                  <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" aria-label="Book an appointment">
                    Book Appointment
                  </a>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";