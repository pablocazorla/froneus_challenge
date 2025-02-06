import { useContext } from "react";
import { CRUDContext } from "@/contexts/crud";
import { Dialog } from "primereact/dialog";

const CampaignEditor = () => {
  const { selectedId, editorOpen, setEditorOpen } = useContext(CRUDContext);

  return (
    <Dialog
      header={selectedId ? "Campaña" : "Nueva campaña"}
      visible={editorOpen}
      // style={{ width: "50vw" }}
      onHide={() => {
        if (!editorOpen) return;
        setEditorOpen(false);
      }}
      draggable={false}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
};

export default CampaignEditor;
