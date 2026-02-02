"use client";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import ButtonFlip from "../elements/button/ButtonFlip";
import Menu from "../menu/Menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  onlyLight?: boolean;
};

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

const InnerHeader1 = ({ onlyLight = false }: Props) => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <>
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="container">
          <div className="flex h-[80px] 2xl:h-[100px] items-center gap-[20px] relative justify-between">
            <div>
              <CodeDynastyLogo />
            </div>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-text", onlyLight && "text-text-fixed-2")}
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="hidden md:block">
                <ButtonFlip
                  btnText="Get Started"
                  link="/contact"
                  className={cn(
                    "text-[14px] py-3 px-7 bg-background-2 hover:bg-background-2 text-text-2 hover:text-text-2 [border-radius:0_20px_0_20px] font-medium",
                    onlyLight &&
                      "bg-background-fixed-2 text-text-fixed hover:bg-background-fixed-2 hover:text-text-fixed"
                  )}
                />
              </div>
              <SideNavModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default InnerHeader1;