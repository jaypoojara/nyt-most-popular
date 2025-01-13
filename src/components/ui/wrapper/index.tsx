import { cn } from "../../../helpers/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(["mx-auto max-w-7xl p-6 lg:px-8", className])}>
      {children}
    </div>
  );
};

export default Wrapper;
