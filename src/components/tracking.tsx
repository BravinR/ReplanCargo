import React, { useState } from 'react';

interface TrackingData {
  trackingNumber: string;
  status: string;
  location: string;
  estimatedDelivery: string;
}

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to fetch tracking information
    fetchTrackingInfo(trackingNumber);
  };

  const fetchTrackingInfo = (trackingNumber: string) => {
    // Simulate API call with a delay
    setTimeout(() => {
      // Mock tracking information
      const trackingData: TrackingData = {
        trackingNumber: trackingNumber,
        status: 'In Transit',
        location: 'Nairobi',
        estimatedDelivery: '2023-07-15',
      };
      setTrackingInfo(trackingData);
    }, 1000);
  };

  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl text-center font-bold mt-4">Tracking</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="flex mb-4">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border border-gray-300 rounded-l-md p-2 w-full"
            placeholder="Enter tracking number"
            required
          />
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-r-md"
          >
            Track
          </button>
        </div>
      </form>
      {trackingInfo && (
        <div className="bg-gray-100 p-4 rounded-md mb-4 mr-4">
          <h2 className="text-lg font-bold mb-2">Tracking Information</h2>
          <p>
            Tracking Number: <strong>{trackingInfo.trackingNumber}</strong>
          </p>
          <p>
            Status: <strong>{trackingInfo.status}</strong>
          </p>
          <p>
            Location: <strong>{trackingInfo.location}</strong>
          </p>
          <p>
            Estimated Delivery: <strong>{trackingInfo.estimatedDelivery}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Tracking;
