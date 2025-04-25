import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import type { PatientProfile } from '@/types';
import { PasswordChange } from './password-change';
import { DiabetesInfo } from './diabetes-info';
import { EmergencyContactsSection } from './emergency-contacts-section';
import { MedicationsSection } from './medications-section.tsx';

export function PatientProfileView({ profile }: { profile: PatientProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone || '',
    birthDate: profile.birthDate,
    gender: profile.gender,
    weight: profile.weight,
    height: profile.height,
  });

  const handleSave = () => {
    // Here you would typically make an API call to save the profile
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Personal Information
          </h2>
          <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Birth Date
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' | 'other' })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600
                    px-3 py-2 text-gray-900 dark:text-gray-100
                    focus:border-primary-500 focus:ring-primary-500
                    dark:bg-gray-700"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
              <p className="text-gray-900 dark:text-gray-100">{profile.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-gray-100">{profile.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-gray-900 dark:text-gray-100">{profile.phone || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Birth Date</p>
              <p className="text-gray-900 dark:text-gray-100">
                {new Date(profile.birthDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
              <p className="text-gray-900 dark:text-gray-100 capitalize">{profile.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Weight</p>
              <p className="text-gray-900 dark:text-gray-100">{profile.weight} kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Height</p>
              <p className="text-gray-900 dark:text-gray-100">{profile.height} cm</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DiabetesInfo profile={profile} />
        <div className="space-y-6">
          <EmergencyContactsSection contacts={profile.emergencyContacts} />
          <MedicationsSection medications={profile.medications} />
        </div>
      </div>

      <PasswordChange />
    </div>
  );
}