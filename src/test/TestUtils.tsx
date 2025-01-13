import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppQueryClient } from "../api/queryClient";

function customRender(ui: React.ReactElement, { ...renderOptions } = {}) {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <BrowserRouter>
        <QueryClientProvider client={AppQueryClient}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    );
  };

  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: Wrapper as ComponentType,
    ...renderOptions,
  });
}

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    render: { ...customRender(jsx) },
  };
}

export * from "@testing-library/react";

// override render export
export { setup };
