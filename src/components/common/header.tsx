'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { MenuIcon, X } from 'lucide-react'
import { getUserInfo } from '@/lib/api'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  user: Promise<string | null>
}

export async function Header({ className, user }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: 'https://map.sistilli.dev/public/coding/SaaS+Boilerplate',
      title: 'Book a demo',
      openInNewTab: true
    },
    {
      href: '#pricing',
      title: 'Features'
    },
    {
      href: 'mailto:myemail@.com',
      title: 'Contact Us'
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img src="/logo.svg" className="mr-3" />
      <Typography className="!text-white !text-base font-medium ">
        Notify
      </Typography>
    </Link>
  )



  const userInfo = await getUserInfo(user as any)
  const userIsLoggedIn = await user ? true : false
  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      {userIsLoggedIn ? (
        <div className='flex space-x-3 items-center'>
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={userInfo.avatar} alt="Avatar" />
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
        <Link
          href="/login"
        >
          <Button size="tiny" color="ghost">
            <Typography variant="p" className="text-black">
              Login
            </Typography>
          </Button>
        </Link>
      )}
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

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
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
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
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
