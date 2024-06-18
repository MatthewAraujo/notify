import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuIcon, X } from "lucide-react";
import { GetHeaderItems } from "./components/headerItems";
import ServerComponent from "./components/serverComponent";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export async function Header({ className }: SidebarProps) {
  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img src="/logo.svg" className="mr-3" />
      <Typography className="!text-white !text-base font-medium ">
        Notify
      </Typography>
    </Link>
  );

  const getAuthButtons = () => {
    return (
      <ServerComponent>
        {({ user, userInfo }) => {
          const userIsLoggedIn = user?.value !== null;
          return (
            <div className="flex gap-3 items-center">
              {userIsLoggedIn ? (
                <div className="flex space-x-3 items-center">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src={userInfo.avatar_url} alt="Avatar" />
                    <AvatarFallback>{userInfo.username}</AvatarFallback>
                  </Avatar>
                  <Link
                    href="/[username]-projects/projects"
                    as={`/${userInfo.username}-projects/projects`}
                  >
                    <Button size="tiny" color="ghost">
                      <Typography variant="p" className="text-black">
                        Dashboard
                      </Typography>
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link href="/login">
                  <Button size="tiny" color="ghost">
                    <Typography variant="p" className="text-black">
                      Login
                    </Typography>
                  </Button>
                </Link>
              )}
            </div>
          );
        }}
      </ServerComponent>
    );
  };

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">{getLogo()}</div>
          <div className="hidden md:flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              <GetHeaderItems />
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    <GetHeaderItems />
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
