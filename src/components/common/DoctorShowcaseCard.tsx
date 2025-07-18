// components/common/DoctorShowcaseCard.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

interface DoctorShowcaseCardProps {
  image: string;
  name: string;
  type: string;
}

const DoctorShowcaseCard = ({ image, name, type }: DoctorShowcaseCardProps) => {
  return (
    <div className="overflow-hidden border rounded-2xl">
      <div className="w-full h-[150px] bg-[#EAEFFF]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 bg-card text-card-foreground">
        <Badge
          variant="outline"
          style={{ fontWeight: "400" }}
          className="flex items-center gap-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 
            px-2 py-1.5 w-fit border-none mb-2"
        >
          <span className="size-2 bg-emerald-500 rounded-full" />
          Available
        </Badge>
        <h1 className="font-semibold text-sm md:text-lg">{name}</h1>
        <p className="text-sm font-normal text-muted-foreground ">{type}</p>
      </div>
    </div>
  );
};

export default DoctorShowcaseCard;