import { createFileRoute } from "@tanstack/react-router";
import { DataFromApiPage } from "../pages/data-from-api/page";

export const Route = createFileRoute("/data-from-api")({
  component: DataFromApiPage,
});
