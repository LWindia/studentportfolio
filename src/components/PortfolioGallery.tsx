import React from 'react';
import { motion } from 'framer-motion';
import { Student } from '../types/Student';
import StudentCard from './StudentCard';

interface PortfolioGalleryProps {
  students: Student[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ students }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our <span className="text-red-500">Talented</span> Students
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore profiles of exceptional developers ready to join your team
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {students.map((student, index) => (
            <StudentCard key={student.id} student={student} index={index} />
          ))}
        </motion.div>

        {students.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-black mb-2">No students found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;