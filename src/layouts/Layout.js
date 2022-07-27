import Sidebar from "../components/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};
