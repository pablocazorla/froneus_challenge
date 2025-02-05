"use client";
import { type Status } from "@/models/campaign";
import Card from "@/components/ui/card";
import Table from "@/components/ui/table";
import Paginator from "@/components/ui/paginator";
import LoadingBox from "@/components/ui/loadingBox";
import BooleanTag from "@/components/ui/booleanTag";
import StatusCampaignTag from "@/components/ui/statusCampaignTag";
import useCampaignDashboard from "./useCampaignDashboard";
import formatDatetime from "@/utils/formatDatetime";

const columns = [
  {
    field: "name",
    header: "Nombre",
    sortable: true,
  },
  {
    field: "created_at",
    header: "Fecha de creación",
    body: ({ created_at }: { created_at: string }) => {
      return formatDatetime(created_at);
    },
  },
  {
    field: "start_at",
    header: "Fecha de lanzamiento",

    body: ({ start_at }: { start_at: string }) => {
      return formatDatetime(start_at);
    },
    sortable: true,
  },
  {
    field: "record_calls",
    header: "Grabable",
    body: ({ record_calls }: { record_calls: boolean }) => {
      return <BooleanTag value={record_calls} />;
    },
  },
  {
    field: "status",
    header: "Estado",
    body: ({ status }: { status: Status }) => {
      return <StatusCampaignTag status={status} />;
    },
    sortable: true,
  },
  {
    field: "users",
    header: "Cantidad de usuarios",
  },
];

const CampaignDashboard = () => {
  const { data, isLoading } = useCampaignDashboard();

  return (
    <Card>
      <header className="p-3">Header</header>
      <Table columns={columns} data={data.data} />
      <Paginator elementsTotal={data.elementsTotal} />
      <LoadingBox loading={isLoading} />
    </Card>
  );
};

export default CampaignDashboard;
