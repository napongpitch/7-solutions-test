import { useEffect, useState, type FC } from "react";
import type { TResult } from "../../../types/user";
import { LinearProgress } from "@mui/material";
import { migrateData } from "../utils/migrate-data";
import { getUser } from "../service/get-user";

export const DataFromApiView: FC = () => {
  const [state, setState] = useState<TResult>({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const userData = await getUser();

      const migrateUserData = migrateData(userData);

      setState(migrateUserData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <LinearProgress data-testid="loading" sx={{ mt: 2 }} />;

  return (
    <div>
      <pre data-testid="pre-json">{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
