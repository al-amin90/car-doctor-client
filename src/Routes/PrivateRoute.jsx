import { MutatingDots } from "react-loader-spinner";
import useAuth from '../Utilis/useAuth';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className="flex items-center justify-center my-40">
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#FF3811"
                secondaryColor="#FF3811"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;