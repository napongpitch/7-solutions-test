import { Card, CardContent, Typography } from "@mui/material";
import type { FC } from "react";

type TTodoItemProps = {
  name: string;
  onClick: () => void;
  dataTestId?: string;
};

export const TodoItem: FC<TTodoItemProps> = ({ name, onClick, dataTestId }) => {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", userSelect: "none" }}>
      <CardContent sx={{ pt: 3 }}>
        <Typography data-testid={dataTestId} variant="body1">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
