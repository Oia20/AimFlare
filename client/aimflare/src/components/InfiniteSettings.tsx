import React from "react";

interface InfiniteSettingsProps {
    settingsOpen: boolean;
    setSettingsOpen: (open: boolean) => void;
}

const InfiniteSettings: React.FC<InfiniteSettingsProps> = ({
    settingsOpen, 
    setSettingsOpen
}) => {
    const [sensitivity, setSensitivity] = React.useState(50);

    const handleSensitivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSensitivity(Number(e.target.value));
    };

    if (!settingsOpen) return null;

    return (
        <div className="fixed top-6 right-6 w-80 bg-black border border-gray-800 rounded-lg text-white shadow-xl z-50">
            <div className="relative p-6">
                {/* Close Button */}
                <button 
                    onClick={() => setSettingsOpen(false)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400">
                        Infinite Settings
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Configure your infinite experience here
                    </p>
                </div>

                {/* Sensitivity Slider */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-200">
                            Sensitivity
                        </label>
                        <span className="text-sm text-gray-400">
                            {sensitivity}%
                        </span>
                    </div>
                    
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sensitivity}
                        onChange={handleSensitivityChange}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    
                    <p className="text-xs text-gray-500">
                        Adjust the sensitivity of the infinite scroll experience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfiniteSettings;