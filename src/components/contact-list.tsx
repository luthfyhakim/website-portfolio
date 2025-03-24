import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:luthfyhakim250404@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/luthfyhakim",
    icon: faGithub,
  },
  {
    name: "Instagram",
    className: "bg-pink-500 hover:bg-pink-600",
    href: "https://instagram.com/fy.hakim_",
    icon: faInstagram,
  },
  {
    name: "LinkedIn",
    className: "bg-blue-700 hover:bg-blue-800",
    href: "https://linkedin.com/in/luthfyhakim",
    icon: faLinkedinIn,
  },
];
export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="size-6" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
