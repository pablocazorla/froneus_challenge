"use client";
import CRUDProvider from "@/contexts/crud";
import CampaignDashboard from "@/components/campaign/dashboard";
import CampaignEditor from "@/components/campaign/editor";
import Container from "@/components/ui/container";
import PageHeader from "@/components/ui/pageHeader";
import { ConfirmDialog } from "primereact/confirmdialog";

export default function CampaignsPage() {
  return (
    <CRUDProvider>
      <Container>
        <PageHeader title="Campañas" />
        <CampaignDashboard />
      </Container>
      <CampaignEditor />
      <ConfirmDialog style={{ maxWidth: "400px" }} />
    </CRUDProvider>
  );
}
