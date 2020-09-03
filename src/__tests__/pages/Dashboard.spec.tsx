import React from "react";

import { render, waitFor } from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";

import AxiosMock from "axios-mock-adapter";
import { api } from "../../services/api";

const apiMock = new AxiosMock(api);

describe("Dashboard Page", () => {
  it("should be able list to make car", async () => {
    apiMock.onGet("make").reply(200, [
      {
        ID: 1,
        Name: "Chevrolet",
      },
      {
        ID: 2,
        Name: "Honda",
      },
      {
        ID: 3,
        Name: "Ford",
      },
    ]);

    const { getByText } = render(<Dashboard />);

    await waitFor(() => expect(getByText("Honda")).toBeTruthy(), {
      timeout: 200,
    });
  });
});
