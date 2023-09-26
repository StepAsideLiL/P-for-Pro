import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PenSquare, X } from "lucide-react";

const OptionCard = ({ option }: { option: { id: string; title: string } }) => {
  return (
    <div className="flex items-center gap-2 p-2 border rounded border-muted hover:border-muted-foreground">
      <p>{option.title}</p>

      <Separator orientation="vertical" className="h-4" />

      <Button
        variant={"ghost"}
        className="h-0 p-0 text-muted-foreground hover:text-primary"
      >
        <PenSquare size={"16px"} />
      </Button>

      <Separator orientation="vertical" className="h-4" />

      <Button
        variant={"ghost"}
        className="h-0 p-0 text-muted-foreground hover:text-primary"
      >
        <X size={"16px"} />
      </Button>
    </div>
  );
};

export default OptionCard;
