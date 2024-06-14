"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "../../ui/typography";
import { cn } from "@/lib/utils";

export function GetHeaderItems() {
  const pathname = usePathname();
  const items = [
    {
      title: "Contact",
      href: "/contact",
      openInNewTab: true,
    },
  ];

  return (
    <>
      {items.map((item) => {
        const selected = pathname === item.href || pathname.includes(item.href);
        return (
          <Link
            href={item.href}
            className="pointer block w-fit"
            target={item.openInNewTab ? "_blank" : ""}
            key={item.title}
          >
            <Typography variant="p" className={cn(selected && "text-primary")}>
              {item.title}
            </Typography>
          </Link>
        );
      })}
    </>
  );
}
