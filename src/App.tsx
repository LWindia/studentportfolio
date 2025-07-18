import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';
import { studentsData } from './data/studentsData';
import { RoleFilter, AvailabilityFilter } from './types/Student';

function App() {
  const [selectedRole, setSelectedRole] = useState<RoleFilter>('All');
  const [selectedAvailability, setSelectedAvailability] = useState<AvailabilityFilter>('All');

  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      const roleMatch = selectedRole === 'All' || student.role === selectedRole;
      const availabilityMatch = selectedAvailability === 'All' || 
        student.availability.includes(selectedAvailability as 'Full-Time' | 'Part-Time');
      
      return roleMatch && availabilityMatch;
    });
  }, [selectedRole, selectedAvailability]);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <FilterBar
        selectedRole={selectedRole}
        selectedAvailability={selectedAvailability}
        onRoleChange={setSelectedRole}
        onAvailabilityChange={setSelectedAvailability}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedRole}-${selectedAvailability}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioGallery students={filteredStudents} />
        </motion.div>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;