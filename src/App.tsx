import "./App.css";
import { SideNav } from "./components/SideNav";
import { Layout } from "./components/Layout";
import CustomHeaderWrapper from "./components/CustomHeader/CustomHeaderWrapper";
import { MantineProvider } from "@mantine/core";
import CustomHeroWrapper from "./components/CustomHero/CustomHeroWrapper";

function App() {
  const components = [<CustomHeaderWrapper />, <CustomHeroWrapper />]
  if (components.length < 0) return
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
      <SideNav components={components} />
      <Layout components={components} />
    </MantineProvider>
  );
}

export default App;
