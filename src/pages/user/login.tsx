import { AuthPage } from "@refinedev/antd";

export const LoginPage = () => {
  return (
    <AuthPage
      type="login"
      renderContent={(
        content: React.ReactNode,
        title: React.ReactNode // no title return
      ) => {
        return content;
      }}
    />
  );
};
