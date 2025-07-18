import React from 'react';
import { motion } from 'framer-motion';
import { RoleFilter, AvailabilityFilter } from '../types/Student';

interface FilterBarProps {
  selectedRole: RoleFilter;
  selectedAvailability: AvailabilityFilter;
  onRoleChange: (role: RoleFilter) => void;
  onAvailabilityChange: (availability: AvailabilityFilter) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedRole,
  selectedAvailability,
  onRoleChange,
  onAvailabilityChange,
}) => {
  const roles: RoleFilter[] = ['All', 'DevOps Engineer', 'ML Engineer', 'Full-Stack Web Developer'];
  const availabilities: AvailabilityFilter[] = ['All', 'Full-Time', 'Part-Time'];

  return (
    <motion.div
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-red-500/20 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Role Filters */}
          <div className="flex-1">
            <h3 className="text-black font-semibold mb-3">Filter by Role</h3>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <motion.button
                  key={role}
                  onClick={() => onRoleChange(role)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedRole === role
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {role}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Availability Filters */}
          <div className="flex-1">
            <h3 className="text-black font-semibold mb-3">Filter by Availability</h3>
            <div className="flex flex-wrap gap-2">
              {availabilities.map((availability) => (
                <motion.button
                  key={availability}
                  onClick={() => onAvailabilityChange(availability)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedAvailability === availability
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {availability}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterBar;