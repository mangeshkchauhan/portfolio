import React from "react";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-0 bg-white/10" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/60 border border-white/20 px-7 py-1 text-sm gap-2 font-medium text-white backdrop-blur-xl relative">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
