import React from 'react';
import { motion } from 'framer-motion';

interface FounderProfileProps {
  name: string;
  role: string;
  photoUrl: string;
  description?: string;
}

const FounderProfile: React.FC<FounderProfileProps> = ({ 
  name, 
  role, 
  photoUrl,
  description 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:flex-shrink-0">
        <img 
          className="h-48 w-full object-cover md:w-48" 
          src={photoUrl} 
          alt={`${name} - ${role}`} 
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-anymate-primary font-semibold">
          {role}
        </div>
        <h2 className="mt-1 text-xl font-medium text-anymate-dark">
          {name}
        </h2>
        {description && (
          <p className="mt-2 text-gray-500">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FounderProfile;