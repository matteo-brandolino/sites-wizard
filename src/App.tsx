import "./App.css";
import { SideNav } from "./components/SideNav";
import { Layout } from "./components/Layout";
import CustomHeaderWrapper from "./components/CustomHeader/CustomHeaderWrapper";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          InputWrapper: {
            styles: (theme) => ({
              label: {
                color:
                  theme.colorScheme === "dark"
                    ? "rgba(255, 255, 255, .1)"
                    : "inherit",
              },
            }),
          },
        },
      }}
    >
      <SideNav />
      <Layout header={<CustomHeaderWrapper />} />
    </MantineProvider>
  );
}

export default App;
