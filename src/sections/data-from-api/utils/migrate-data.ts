import type {
  TDepartmentDataResult,
  TResult,
  TUser,
} from "../../../types/user";

// migrate user data
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

// manage user data in department
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
