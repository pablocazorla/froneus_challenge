"use client";

import { useEffect } from "react";
import { getCampaigns, getCampaign } from "@/services/campaign";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const data = await getCampaign("e0d1a17c-6300-4e3c-a311-60b8cde4es9ba");
      console.log("hola", data);
    };
    getData();
  }, []);

  return <div className="">Hola</div>;
}
