import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import SearchForm from "./SearchForm";

const SideSearch = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("block lg:hidden", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Search size="24px" className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="w-full">
          <div className="py-4">
            <SearchForm />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideSearch;
