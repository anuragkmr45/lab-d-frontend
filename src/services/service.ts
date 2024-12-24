import apiClient from '@/lib/axios';

const getAllServices = async () => {
try {
  const response = await apiClient.get('/services');
  return response.data;
} catch (error) {
  console.error('Error while fetching all services:', error);
  throw new Error('Failed to fetch all services. Please try again later.');
}
};

const getServiceById = async (serviceId: number) => {
  try {
    const response = await apiClient.get(`/services/${serviceId}`);
  return response.data;
  } catch (error) {
    console.error('Error while fetching service:', error);
    throw new Error('Failed to fetch service. Please try again later.');
  }
};

const addServices = async (services: Array<any>) => {
  try {
    const response = await apiClient.post('/services', services);
  return response.data;
  } catch (error) {
    console.error('Error while adding services:', error);
    throw new Error('Failed to add services. Please try again later.');
  }
};

const updateService = async (serviceId: number, serviceData: any) => {
  try {
    const response = await apiClient.put(`/services/${serviceId}`, serviceData);
  return response.data;
  } catch (error) {
    console.error('Error while fetching all services:', error);
    throw new Error('Failed to add booking. Please try again later.');
  }
};

const deleteService = async (serviceId: number) => {
  try {
    const response = await apiClient.delete(`/services/${serviceId}`);
  return response.data;
  } catch (error) {
    console.error('Error while fetching all services:', error);
    throw new Error('Failed to add booking. Please try again later.');
  }
};

const deleteAllServices = async () => {
  try {
    const response = await apiClient.delete('/services');
  return response.data;
  } catch (error) {
    console.error('Error while fetching all services:', error);
    throw new Error('Failed to add booking. Please try again later.');
  }
};

export { getAllServices, getServiceById, addServices, updateService, deleteService, deleteAllServices };
