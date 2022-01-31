import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Dummycomp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate("/posts");
    }, [location])

    return (
        <div></div>
    );
};

export default Dummycomp;
