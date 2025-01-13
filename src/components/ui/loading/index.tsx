import { cn } from "../../../helpers/utils";

type Props = {
  className?: string;
};

const Loading = ({ className }: Props) => {
  return (
    <div
      className={cn([
        "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center",
        className,
      ])}
    >
      <p className="sr-only" data-testid="loading">
        Loading...
      </p>
      <div className="border-8 border-transparent rounded-full p-8 border-y-white animate-spin ease-in-out"></div>
    </div>
  );
};

export default Loading;
