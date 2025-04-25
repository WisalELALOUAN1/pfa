import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import type { PatientProfile, DoctorProfile, AdminProfile } from '@/types';
import { PatientProfileView } from '@/components/profile/patient-profile-view';
import { DoctorProfileView } from '@/components/profile/doctor-profile-view';
import { AdminProfileView } from '@/components/profile/admin-profile-view';

const mockDoctorProfile: DoctorProfile = {
  id: '2',
  email: 'kawtar.taik@example.com',
  name: 'Dr. Kawtar TAIK',
  role: 'doctor',
  phone: '+212 6XX-XXXXXX',
  profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150',
  specialization: 'Endocrinologist',
  qualifications: [
    {
      id: '1',
      degree: 'MD',
      institution: 'Faculty of Medicine, Rabat',
      year: 2015,
      specialization: 'Endocrinology'
    },
    {
      id: '2',
      degree: 'Fellowship',
      institution: 'National Institute of Endocrinology',
      year: 2018,
      specialization: 'Diabetes Care'
    }
  ],
  practiceDetails: {
    address: '123 Medical Center Blvd',
    city: 'Casablanca',
    phone: '+212 6XX-XXXXXX',
    workingHours: {
      start: '09:00',
      end: '17:00'
    },
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  languages: ['Arabic', 'French', 'English'],
  experience: 8,
  about: 'Specialized in diabetes care and metabolic disorders with 8 years of experience.',
  consultationFee: 400
};

const mockPatientProfile: PatientProfile = {
  id: '1',
  email: 'wisal.el.alouan@example.com',
  name: 'Wisal EL ALOUAN',
  role: 'patient',
  phone: '+212 6XX-XXXXXX',
  profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
  diabetesType: 'type2',
  diagnosisDate: '2020-03-15',
  medications: [
    {
      id: '1',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: '2020-03-15',
      notes: 'Take with meals'
    }
  ],
  emergencyContacts: [
    {
      id: '1',
      name: 'Mohammed EL ALOUAN',
      relationship: 'Father',
      phoneNumber: '+212 6XX-XXXXXX',
      email: 'mohammed.el.alouan@example.com',
      isMainContact: true
    }
  ],
  bloodSugarTarget: {
    min: 80,
    max: 130
  },
  lastCheckup: '2024-02-15',
  weight: 68,
  height: 165,
  birthDate: '1990-05-20',
  gender: 'female'
};

const mockAdminProfile: AdminProfile = {
  id: '3',
  email: 'admin@example.com',
  name: 'Admin User',
  role: 'admin',
  phone: '+212 6XX-XXXXXX',
  profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
};

export function ProfilePage() {
  const { user } = useAuth();
  
  let profile;
  if (user?.role === 'admin') {
    profile = mockAdminProfile;
  } else if (user?.role === 'doctor') {
    profile = mockDoctorProfile;
  } else {
    profile = mockPatientProfile;
  }

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {user?.role === 'admin' ? (
        <AdminProfileView profile={mockAdminProfile} />
      ) : user?.role === 'doctor' ? (
        <DoctorProfileView profile={mockDoctorProfile} />
      ) : (
        <PatientProfileView profile={mockPatientProfile} />
      )}
    </div>
  );
}