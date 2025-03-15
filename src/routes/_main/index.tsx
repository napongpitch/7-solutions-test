import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../../pages/home/page";

export const Route = createFileRoute("/_main/")({
  component: HomePage,
});
