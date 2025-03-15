import { getUser } from "../service/get-user";
import type { TUser } from "../../../types/user";

import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
// import { vi, type MockInstance, Mock } from "vitest";
import { vi } from "vitest";
import type { MockInstance } from "vitest";

import { mockDataFromApi } from "./utils.test";

describe("Fetch User Data :", () => {
  let mockAxios: MockAdapter;
  let axiosGetSpy: MockInstance<
    <T = any, R = AxiosResponse<T, any>, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ) => Promise<R>
  >;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    axiosGetSpy = vi.spyOn(axios, "get");
  });

  afterEach(() => {
    mockAxios.restore();
    axiosGetSpy.mockRestore();
    vi.clearAllMocks();
  });

  it("should fetch user data from API", async () => {
    const mockUsers: TUser[] = mockDataFromApi;

    mockAxios
      .onGet("https://dummyjson.com/users")
      .reply(200, { users: mockUsers });

    const result = await getUser();

    expect(result).toStrictEqual(mockUsers);

    expect(axiosGetSpy).toHaveBeenCalledWith("https://dummyjson.com/users");
  });
  it("should throw an error if API request fails", async () => {
    mockAxios
      .onGet("https://dummyjson.com/users")
      .reply(500, "Internal Server Error");

    await expect(getUser()).rejects.toThrow();
  });
});
