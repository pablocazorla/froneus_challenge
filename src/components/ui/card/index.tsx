import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div className={clsx("relative bg-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
};

export default Card;
