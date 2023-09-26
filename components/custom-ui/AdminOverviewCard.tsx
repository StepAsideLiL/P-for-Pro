import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { User } from "lucide-react";

const AdminOverviewCard = ({
  title,
  number,
  icon,
}: {
  title: string;
  number: number | string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription className="flex items-center justify-between">
          <span>{title}</span>

          {icon}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <h1 className="text-2xl font-bold">{number}</h1>
      </CardContent>
    </Card>
  );
};

export default AdminOverviewCard;
