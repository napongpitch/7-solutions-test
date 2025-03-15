import { DataFromApiView } from "../view/data-from-api-view";
import { getUser } from "../service/get-user";
import { migrateData } from "../utils/migrate-data";

// import { vi, type MockInstance, Mock } from "vitest";
import { vi } from "vitest";
import type { Mock } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

vi.mock("../service/get-user", () => ({
  getUser: vi.fn(),
}));

vi.mock("../utils/migrate-data", () => ({
  migrateData: vi.fn(),
}));

describe("<DataFromApiView />", () => {
  const mockUserData = { id: 1, name: "Napongpitch" };
  const mockMigratedData = {
    userId: 1,
    fullName: "Napongpitch Wisessathitphaisan",
  };

  beforeEach(() => {
    (getUser as Mock).mockClear();
    (migrateData as Mock).mockClear();
  });

  it("should render loading state initial", () => {
    render(<DataFromApiView />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should fetch data and display it after loading", async () => {
    (getUser as jest.Mock).mockResolvedValue(mockUserData);
    (migrateData as jest.Mock).mockReturnValue(mockMigratedData);

    render(<DataFromApiView />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(getUser).toHaveBeenCalledTimes(1);
    expect(migrateData).toHaveBeenCalledWith(mockUserData);

    expect(screen.getByTestId("pre-json")).toBeInTheDocument();
  });

  it("should handle error data fetching", async () => {
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (getUser as Mock).mockRejectedValue(new Error("API Error"));

    render(<DataFromApiView />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(consoleErrorMock).toHaveBeenCalled();
    consoleErrorMock.mockRestore();
  });
});
