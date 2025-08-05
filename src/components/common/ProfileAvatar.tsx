import Link from "next/link";
import { navRoutes } from "@/routes/navRoutes";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, 
    DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const menuItems = [
  { title: "Profile", href: navRoutes?.dashboards?.profile },
  { title: "My Appointments", href: navRoutes?.dashboards?.appointment },
  { title: "Logout", href: "/" },
];

const ProfileAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <MdOutlineKeyboardArrowDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel className="text-muted-foreground font-semibold">
          My Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => (
          <Link key={item.title} href={item.href} passHref>
            <DropdownMenuItem className="cursor-pointer">
              {item.title}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
