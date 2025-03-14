import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { HomePage } from "../pages/home/page";

export const Route = createFileRoute("/")({
  component: HomePage,
});
