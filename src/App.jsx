import AppRouter from "./pages/router/AppRouter.js";
import { Layout } from "./layouts/Layout";
import { AuthProvider } from "./context/AuthContext.js";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { PostProvider } from "./context/PostContext.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <PostProvider>
          <Layout>
            <AppRouter />
            <Toaster />
          </Layout>
        </PostProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
