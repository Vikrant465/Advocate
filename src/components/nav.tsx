import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
  Image,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icon";


export const Logo = () => {
  return (
    <Image
      src="/icon.png"       // Image is in the public folder
      alt="Logo"
      width={36}
      height={36}
    />
  );
};


export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

// Handle theme toggle
const toggleTheme = (value: boolean) => {
  setIsDark(value);
  if (value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};


  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Advocate</p>
      </NavbarBrand>
      <NavbarContent className=" flex gap-4" justify="center">
        <NavbarItem >
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        {/* <NavbarItem >
          <Link href="#Project" color="foreground" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experience">
            Experience
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarItem>
        <Link color="foreground" href="#skills">
          Upload
        </Link>
      </NavbarItem>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Link href="../component/contact">Contact</Link> */}
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="../guest" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <Switch
          isSelected={isDark}
          onValueChange={toggleTheme}
          size="lg"
          color="primary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        ></Switch>
      </NavbarContent>
    </Navbar>
  );
}
