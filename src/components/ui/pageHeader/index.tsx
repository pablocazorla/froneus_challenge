const PageHeader = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 py-4 mb-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </header>
  );
};

export default PageHeader;
