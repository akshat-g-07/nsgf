"use client";

import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import UpperBarSM from "@/components/upper-bar/sm";

export default function SM() {
  const d = useTranslations("DETAILS");
  const n = useTranslations("NAVBAR");
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className={"bg-primary/60"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{d("name")}</SheetTitle>
            <SheetDescription>{d("intro")}</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col px-6 space-y-4">
            <Link href={"home"}>{n("home")}</Link>
            <Link href={"about"}>{n("about")}</Link>
            <Link href={"members"}>{n("members")}</Link>
            <Link href={"events"}>{n("events")}</Link>
            <Link href={"gallery"}>{n("gallery")}</Link>
            <Link href={"sponsors"}>{n("sponsors")}</Link>
          </div>
          <SheetFooter
            className={
              "flex-row w-full justify-center items-center gap-x-0 *:px-2 *:py-3 *:flex-auto p-0 text-center bg-gray-300 text-gray-800"
            }
          >
            <UpperBarSM />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
