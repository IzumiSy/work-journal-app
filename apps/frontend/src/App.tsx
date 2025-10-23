import { AppShell, SidebarLayoutContainer } from "@tailor-platform/app-shell";

export const App = () => {
  return (
    <AppShell
      title="Work Journal App"
      configurations={{
        basePath: "",
        modules: [],
      }}
    >
      <SidebarLayoutContainer />
    </AppShell>
  );
};
