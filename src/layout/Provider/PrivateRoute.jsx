import React, { use } from 'react';
import { AuthConntext } from './AuthProvider';
import { Navigate } from 'react-router';
import CircularText from '../../Component/CircularText ';
import { div } from 'framer-motion/client';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthConntext)
    if (loading) {
        return <div className='flex justify-center items-center'>
            <CircularText
            text="INTERSTELLAR*"
            spinDuration={20}
            className="text-xl text-primary"
        />
        </div>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate to="/auth/login"></Navigate>

};

export default PrivateRoute;