import { Tag } from "primereact/tag";

const BooleanTag = ({ value }: { value?: boolean }) => {
  return (
    <Tag
      value={value ? "Sí" : "No"}
      severity={value ? "success" : "danger"}
      className="w-11"
    />
  );
};

export default BooleanTag;
