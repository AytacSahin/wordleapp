import React, { useContext, useEffect } from 'react';
import { MainContext } from '../Context';

const Notification = () => {
    const { notificationMessage, setNotificationMessage } = useContext(MainContext);

    const handleCloseNotification = () => {
        setNotificationMessage(""); // Bildirimi kapat
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleCloseNotification();
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50"
            onClick={handleCloseNotification}
        >
            <div className="bg-white p-4 rounded-md shadow-lg">
                <p className="text-xl">{notificationMessage}</p>
            </div>
        </div>
    );
};

export default Notification;