import React from 'react';

const IsLoadingPage = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <div className="p-4 flex flex-col items-center gap-6">
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
}

export default IsLoadingPage;
