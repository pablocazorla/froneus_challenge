import { type Status } from "@/models/campaign";
import BooleanTag from "@/components/ui/booleanTag";
import StatusCampaignTag from "@/components/ui/statusCampaignTag";
import formatDatetime from "@/utils/formatDatetime";
import TableActions, {
  type TableActionType,
} from "@/components/ui/table/actions";

type OpenConfirmFunction = (id: string) => void;

const tableColumns = (
  openConfirmFinish: OpenConfirmFunction,
  openConfirmDelete: OpenConfirmFunction,
  openCampaign: OpenConfirmFunction
) => {
  return [
    {
      field: "name",
      header: "Nombre",
      sortable: true,
      body: ({ id, name }: { id: string; name: string }) => {
        return (
          <span
            className="font-bold text-sky-800 underline cursor-pointer hover:text-sky-500"
            onClick={() => {
              openCampaign(id);
            }}
            title="Detalles"
          >
            {name}
          </span>
        );
      },
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
    {
      field: "id",
      header: "",
      body: ({ id, status }: { id: string; status: Status }) => {
        const actions: TableActionType[] = [
          {
            icon: "pi pi-eye",
            label: "Detalles",
            color: "default",
            onClick: () => {
              openCampaign(id);
            },
          },
        ];

        if (status === "actived") {
          actions.push({
            icon: "pi pi-power-off",
            label: "Finalizar",
            color: "success",
            onClick: () => {
              openConfirmFinish(id);
            },
          });
        }

        if (status === "on_hold") {
          actions.push({
            icon: "pi pi-trash",
            label: "Eliminar",
            color: "danger",
            onClick: () => {
              openConfirmDelete(id);
            },
          });
        }

        return <TableActions actions={actions} />;
      },
    },
  ];
};

export default tableColumns;
