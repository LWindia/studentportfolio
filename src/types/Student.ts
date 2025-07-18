export interface Student {
  id: string;
  name: string;
  college: string;
  passingOutYear: string;
  github: string;
  portfolio: string;
  photo: string;
  role: 'DevOps Engineer' | 'ML Engineer' | 'Full-Stack Web Developer';
  availability: ('Full-Time' | 'Part-Time')[];
}

export type RoleFilter = 'All' | 'DevOps Engineer' | 'ML Engineer' | 'Full-Stack Web Developer';
export type AvailabilityFilter = 'All' | 'Full-Time' | 'Part-Time';