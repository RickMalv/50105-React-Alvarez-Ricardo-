import { helix } from "ldrs";
export const LoaderComponent = () => {
  helix.register();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <l-helix size="70" speed="2.5" color="white"></l-helix>
    </div>
  );
};
