import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import type { FC } from "react";
import { Grid2, Typography } from "@mui/material";

const MainLayout: FC = () => {
  return (
    <Grid2 container>
      <Grid2 size={12} height={"50px"}>
        <Grid2 container justifyContent={"space-between"} sx={{ px: 2 }}>
          <Grid2>
            <Typography variant="h4">
              Frontend Assignment (7-Solutions)
            </Typography>
          </Grid2>
          <Grid2 display={"flex"} gap={2}>
            <Link to="/">Todo List</Link>
            <Link to="/data-from-api">Create data from API</Link>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={12}>
        <Outlet />
      </Grid2>
    </Grid2>
  );
};

export const Route = createFileRoute("/_main")({
  component: MainLayout,
});
