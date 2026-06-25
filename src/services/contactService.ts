// services/registrationService.ts

import api from '../api/axiosInstance';

export interface ContactPayload {
  name?: string
  email: string;
  phone?: string;
  message?: string;
}

export const submitContact = async (
  payload: ContactPayload,
) => {
  const response = await api.post('/contactus', payload);

  return response.data;
};
