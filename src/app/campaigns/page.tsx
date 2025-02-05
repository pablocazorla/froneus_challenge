"use client";
import CRUDProvider from "@/contexts/crud";
import CampaignDashboard from "@/components/campaign/dashboard";
import Container from "@/components/ui/container";
import PageHeader from "@/components/ui/pageHeader";

export default function CampaignsPage() {
  return (
    <CRUDProvider>
      <Container>
        <PageHeader title="Campañas" />
        <CampaignDashboard />
      </Container>
    </CRUDProvider>
  );
}
