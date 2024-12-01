import React from 'react';
import { useImmer } from 'use-immer';

const UserProfileWithImmer = () => {
    const [userProfile, updateUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: false
        }
    });

    const updateContactDetails = (phone, address) => {
        updateUserProfile(draft => {
          draft.contactDetails.phone = phone;
          draft.contactDetails.address = address;
        });
      };
      
      const toggleNewsletterSubscription = () => {
        updateUserProfile(draft => {
          draft.preferences.newsletter = !draft.preferences.newsletter;
        });
      };

      return (
        <div>
          <h1>User Profile</h1>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={userProfile.name}
                onChange={e => updateUserProfile(draft => { draft.name = e.target.value; })}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={userProfile.email}
                onChange={e => updateUserProfile(draft => { draft.email = e.target.value; })}
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                type="text"
                value={userProfile.contactDetails.phone}
                onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                value={userProfile.contactDetails.address}
                onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={userProfile.preferences.newsletter}
                onChange={toggleNewsletterSubscription}
              />
              Subscribe to Newsletter
            </label>
          </div>
          <div>
            <h2>Current State</h2>
            <pre>{JSON.stringify(userProfile, null, 2)}</pre>
          </div>
        </div>
      );
};

export default UserProfileWithImmer;