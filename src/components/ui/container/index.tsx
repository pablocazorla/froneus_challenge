interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={"relative max-w-[1600px] mx-auto px-5 " + className}>
      {children}
    </div>
  );
};

export default Container;
