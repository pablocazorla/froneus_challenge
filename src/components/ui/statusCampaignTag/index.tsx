import { Tag } from "primereact/tag";
import { type Status } from "@/models/campaign";

const StatusCampaignTag = ({ status }: { status: Status }) => {
  switch (status) {
    case "actived":
      return <Tag value="Activa" severity="danger" className="min-w-20" />;
    case "ended":
      return <Tag value="Finalizada" severity="success" className="min-w-20" />;
    case "on_hold":
      return <Tag value="En espera" severity="warning" className="min-w-20" />;
    default:
      return <Tag value="Otro" severity="info" className="min-w-20" />;
  }
};

export default StatusCampaignTag;
