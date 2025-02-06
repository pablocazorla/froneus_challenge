"use client";

import Card from "@/components/ui/card";
import Table from "@/components/ui/table";
import TableSearch from "@/components/ui/table/filters/search";
import Paginator from "@/components/ui/paginator";
import LoadingBox from "@/components/ui/loadingBox";
import useCampaignDashboard from "./useCampaignDashboard";
import { Button } from "primereact/button";
import tableColumns from "./tableColumns";

const CampaignDashboard = () => {
  const {
    data,
    isLoading,
    openConfirmFinish,
    openConfirmDelete,
    openCampaign,
  } = useCampaignDashboard();

  return (
    <Card>
      <header className="p-3 flex items-center justify-between gap-3">
        <TableSearch />
        <Button
          //label={}
          //icon="pi pi-plus"
          onClick={() => openCampaign(null)}
          aria-label="Nueva campaña"
          title="Nueva campaña"
          className="flex items-center gap-2"
        >
          <span className="pi pi-plus"></span>
          <span className="hidden sm:inline">Nueva campaña</span>
        </Button>
      </header>
      <div className="relative">
        <Table
          columns={tableColumns(
            openConfirmFinish,
            openConfirmDelete,
            openCampaign
          )}
          data={data.data}
        />
        <Paginator elementsTotal={data.elementsTotal} />
        <LoadingBox loading={isLoading} />
      </div>
    </Card>
  );
};

export default CampaignDashboard;
