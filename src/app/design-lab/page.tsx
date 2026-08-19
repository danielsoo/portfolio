import type { Metadata } from "next";
import DesignLab from "@/components/design-lab/DesignLab";

export const metadata: Metadata = {
  title: "Hero Design Lab — Younsoo Park",
  description: "Three interactive hero directions for the Younsoo Park portfolio.",
};

export default function DesignLabPage() {
  return <DesignLab />;
}
