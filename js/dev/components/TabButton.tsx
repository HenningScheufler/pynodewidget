import { Button } from '../../src/components/ui/button';
import { cn } from '../../src/lib/utils';

interface TabButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, icon, isActive, onClick }: TabButtonProps) {
  return (
    <Button 
      variant={isActive ? "default" : "ghost"}
      onClick={onClick}
      className={cn(
        "rounded-b-none border-b-2",
        isActive 
          ? "border-b-primary bg-background text-foreground" 
          : "border-b-transparent hover:bg-muted"
      )}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Button>
  );
}
