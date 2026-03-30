import { Navigate } from "react-router";
import { useUserContext } from "../../Context/User";

const AdminRoute = ({ children }) => {
    const { user, isAuthChecked } = useUserContext();

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }
    const hasAccess = user?.roles === 'admin';
    return hasAccess ? children : <Navigate to="/" />;
}
export default AdminRoute;