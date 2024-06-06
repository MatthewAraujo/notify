import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Typography from "@/components/ui/typography";
import { InfoIcon } from "lucide-react";

interface TooltipProps {
  id?: string;
  description: string;
}

export function Tooltiper({ description, id }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip key={id}>
        <TooltipTrigger onClick={(e) => e.preventDefault()}>
          <InfoIcon size="16" />
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant="p" className="white">
            {description}
          </Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
