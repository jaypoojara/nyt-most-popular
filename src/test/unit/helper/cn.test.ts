import { cn } from "../../../helpers/utils";

describe("cn function", () => {
  it("correctly combines multiple classes", () => {
    const result = cn("bg-red-500", "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });

  it("removes undefined, null, or false values", () => {
    const result = cn("bg-red-500", null, undefined, false, "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });

  it("merges classes using tailwind-merge", () => {
    // In case of conflicting classes, tailwind-merge should choose the correct one
    const result = cn("bg-red-500", "bg-blue-500", "text-white");
    expect(result).toBe("bg-blue-500 text-white"); // tailwind-merge should resolve this to 'bg-blue-500'
  });

  it("handles clsx conditional classes", () => {
    const isActive = true;
    const result = cn([
      "bg-red-500",
      "text-gray-500",
      isActive && "text-white",
    ]);
    expect(result).toBe("bg-red-500 text-white");
  });

  it("handles empty input gracefully", () => {
    const result = cn();
    expect(result).toBe(""); // Should return an empty string if no arguments are passed
  });

  it("handles conflicting boolean classes", () => {
    const result = cn("bg-red-500", { "bg-blue-500": false });
    expect(result).toBe("bg-red-500"); // The false class should not be included
  });
});
