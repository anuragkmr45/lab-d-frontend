import apiClient from '@/lib/axios';

const getProfile = async () => {
    try {
        const response = await apiClient.get('/profile');
        return response.data;
    } catch (error) {
        console.error('Error while fetching user:', error);
        throw new Error('Failed to fetch user. Please try again later.');
    }
};

const updateProfile = async (profileData: any) => {
    try {
        const response = await apiClient.put('/profile', profileData);
        return response.data;
    } catch (error) {
        console.error('Error while updating user:', error);
        throw new Error('Failed to update user. Please try again later.');
    }
};

const deleteProfile = async () => {
    try {
        const response = await apiClient.delete('/profile');
        return response.data;
    } catch (error) {
        console.error('Error while deletinging user:', error);
        throw new Error('Failed to delete user. Please try again later.');
    }
};

export { getProfile, updateProfile, deleteProfile };
