import React from 'react';

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: 'primary' | 'secondary';
};

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <button
      className={`relative inline-flex min-h-[48px] w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 touch-manipulation transition-all duration-200 active:scale-[0.98] group ${otherClasses || ''}`}
      onClick={handleClick}
      type="button"
    >
      <span
        className={`absolute inset-0 transition-all duration-200 ${
          isPrimary
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30'
            : 'bg-gradient-to-r from-black/8 to-black/5 dark:from-white/10 dark:to-white/5 group-hover:from-black/12 group-hover:to-black/8 dark:group-hover:from-white/15 dark:group-hover:to-white/10'
        }`}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-6 py-3 text-base gap-3 font-medium backdrop-blur-sm relative transition-all duration-200 ${
          isPrimary
            ? 'text-foreground border border-black/20 bg-white/80 group-hover:bg-white dark:text-white dark:bg-black/60 dark:border-white/30 dark:group-hover:bg-black/40 dark:group-hover:border-white/50'
            : 'text-foreground border border-black/15 bg-black/5 group-hover:bg-black/10 dark:text-white dark:bg-black/20 dark:border-white/30 dark:group-hover:bg-black/30 dark:group-hover:border-white/50'
        }`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
