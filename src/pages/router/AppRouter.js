import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Register } from "../Register";
import { Login } from "../Login";
import { NotFound } from "../NotFound";
import { NewPost } from "../NewPost";
import { PrivateRoute } from "./PrivateRoute";
import { Post } from "../Post";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route exact path="/newPost" element={<NewPost />} />
      <Route exact path="/post/:id" element={<Post />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
