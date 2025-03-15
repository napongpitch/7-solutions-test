import axios from "axios";
import { useEffect, useState, type FC } from "react";
import type {
  TDepartmentDataResult,
  TResult,
  TUser,
} from "../../../types/user";
import { LinearProgress } from "@mui/material";

export const DataFromApiView: FC = () => {
  const [state, setState] = useState<TResult>({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await axios.get<{ users: TUser[] }>(
        "https://dummyjson.com/users"
      );

      const migrateResult = migrateData(result.data.users);
      setState(migrateResult);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <LinearProgress sx={{ mt: 2 }} />;

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

// ----------------------------------------
export const migrateData = (data: TUser[]): TResult => {
  let result: TResult = {};

  data.forEach((user) => {
    if (user.company.department in result) {
      result[user.company.department] = addUserDataToDepartment(
        user,
        result[user.company.department]
      );
    } else {
      result[user.company.department] = addUserDataToDepartment(user, {
        male: 0,
        female: 0,
        ageRange: `${user.age}-${user.age}`,
        hair: {},
        addressUser: {},
      });
    }
  });

  return result;
};

export const addUserDataToDepartment = (
  user: TUser,
  result: TDepartmentDataResult
): TDepartmentDataResult => {
  let r = result;

  // gender
  if (user.gender === "male") {
    r.male++;
  } else {
    r.female++;
  }

  // ageRange
  const [ageMin, ageMax] = result.ageRange.split("-");
  if (user.age < Number(ageMin)) {
    r.ageRange = `${user.age}-${ageMax}`;
  }
  if (user.age > Number(ageMax)) {
    r.ageRange = `${ageMin}-${user.age}`;
  }

  // hair
  if (user.hair.color in r.hair) {
    r.hair[user.hair.color]++;
  } else {
    r.hair[user.hair.color] = 1;
  }

  // addressUser
  r.addressUser[`${user.firstName}${user.lastName}`] = user.address.postalCode;

  return r;
};
