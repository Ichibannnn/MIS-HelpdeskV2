import { Navigate } from "react-router-dom";
import PermittedRoutes from "./PermittedRoute";
import { useSelector } from "react-redux";

const Private = ({ Render }) => {
  const fullname = useSelector((state) => state?.user?.fullname);
  const permissions = useSelector((state) => state?.user?.permissions);

  return !fullname || permissions?.length === 0 ? <Navigate to="/login" /> : <PermittedRoutes Render={Render} />;
};

export default Private;
