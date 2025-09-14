/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface UpscalePanelProps {
  onApplyUpscale: (scaleFactor: number) => void;
  isLoading: boolean;
}

const UpscalePanel: React.FC<UpscalePanelProps> = ({ onApplyUpscale, isLoading }) => {
  const [selectedScale, setSelectedScale] = useState<number>(2);

  const scaleFactors = [2, 4];

  const handleApply = () => {
    onApplyUpscale(selectedScale);
  };

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-300">Upscale Image</h3>
      <p className="text-sm text-gray-400 -mt-2">Increase image resolution and enhance details using AI.</p>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-400">Scale Factor:</span>
        {scaleFactors.map((factor) => (
          <button
            key={factor}
            onClick={() => setSelectedScale(factor)}
            disabled={isLoading}
            className={`px-6 py-3 rounded-md text-base font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 ${
              selectedScale === factor 
              ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20' 
              : 'bg-white/10 hover:bg-white/20 text-gray-200'
            }`}
          >
            {factor}x
          </button>
        ))}
      </div>

      <button
        onClick={handleApply}
        disabled={isLoading}
        className="w-full max-w-xs mt-2 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
      >
        {`Apply ${selectedScale}x Upscale`}
      </button>
    </div>
  );
};

export default UpscalePanel;
