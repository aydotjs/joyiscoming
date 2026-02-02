"use client";

import Menu from "@/components/menu/Menu";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import GlobalSearch from "../tools/GlobalSearch";
import Link from "next/link";

const CodeDynastyLogo = () => {
  return (
    <Link href="/" className="group">
      <div className="flex items-center gap-1.5 text-2xl md:text-3xl font-teko uppercase tracking-wide">
        <span className="text-foreground/60 transition-all group-hover:text-foreground">
          &lt;
        </span>
        <span className="text-foreground transition-all group-hover:tracking-wider">
          CodeDynasty
        </span>
        <span className="text-foreground/60 transition-all group-hover:text-foreground">
          /&gt;
        </span>
      </div>
    </Link>
  );
};

const WebHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="border-b">
      <div className="inner-container large">
        <div className="flex h-[100px] items-center gap-[20px] relative justify-between">
          <CodeDynastyLogo />
          
          <div className="pos-center hidden xl:block">
            <Menu className="text-[22px] [&_button]:text-[22px] [&_a]:text-[22px] [&_svg]:w-4 [&_svg]:h-4 uppercase font-teko" />
          </div>
          
          <div className="flex gap-[20px]">
            <div>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setOpen(true)}
              >
                <Search size={20} />
              </Button>
            </div>
            <SideNavModal />
          </div>
        </div>
      </div>
      <GlobalSearch open={open} setOpen={setOpen} />
    </header>
  );
};

export default WebHeader;