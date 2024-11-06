import React from "react";


interface InfiniteSettingsProps {
    settingsOpen: boolean;
    setSettingsOpen: (open: boolean) => void;
}

const InfiniteSettings: React.FC<InfiniteSettingsProps> = ({settingsOpen, setSettingsOpen}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
      fontFamily: 'monospace',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 120
    }}>
        <div>
            <button onClick={() => setSettingsOpen(false)} className=" text-white bg-gray-800 rounded-full hover:bg-gray-900 hover:text-white z-50">Close Settings</button>
            <h1 className="text-4xl font-bold">Infinite Settings</h1>
            <p className="text-gray-400 text-lg">
                Configure your infinite experience here.
            </p>
        </div>
    </div>
  );
};

export default InfiniteSettings;