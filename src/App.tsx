import "./styles/sider.css";
import "@refinedev/antd/dist/reset.css";
import { AboutPage } from "pages/about";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Dashboard } from "pages/dashboard";
import { DeviceList } from "pages/devices";
import { ErrorComponent, notificationProvider, ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import { Header } from "./components/header";
import { LoginPage } from "pages/user";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useTranslation } from "react-i18next";
import * as colorMode from "./components/color-mode";
import dataProvider from "@refinedev/simple-rest";
import routerBindings, * as reactRouterV6 from "@refinedev/react-router-v6";
import dayjs from "dayjs";
import { SettingPage } from "pages/settings";
import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";

function App() {
  const { t, i18n } = useTranslation();
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };
  dayjs.locale(i18n.language);
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <colorMode.ColorModeContextProvider>
          <Refine
            dataProvider={{
              default: dataProvider("http://localhost:8000"),
            }}
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            i18nProvider={i18nProvider}
            resources={[
              {
                name: "dashboard",
                list: "/",
                meta: {
                  icon: <DashboardOutlined />,
                },
              },
              {
                name: "settings",
                list: "/settings",
                meta: {
                  icon: <SettingOutlined />,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                element={
                  <ThemedLayoutV2
                    Title={({ collapsed }) => (
                      <ThemedTitleV2
                        collapsed={collapsed}
                        icon={
                          collapsed ? (
                            <img alt={"icon"} src={"favicon.png"} style={{ width: "1.5rem" }} />
                          ) : (
                            <img alt={"icon"} src={"favicon.png"} style={{ width: "1rem" }} />
                          )
                        }
                        text={"Sysinfo UI"}
                      />
                    )}
                    Header={() => <Header sticky={true} />}
                  >
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route path="*" element={<ErrorComponent />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/devices" index element={<DeviceList />} />
                <Route path="/settings" index element={<SettingPage />} />
              </Route>
            </Routes>
            <RefineKbar />
            <reactRouterV6.UnsavedChangesNotifier />
          </Refine>
        </colorMode.ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}
export default App;
