export interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }