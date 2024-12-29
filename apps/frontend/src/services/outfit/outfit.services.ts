"use server"

import { AxiosResponse } from 'axios';
import request from '@/services/request';
import { OutfitI } from '@/lib/interfaces/outfit/outfit.interfaces';

export const readOutfitsService = async (): Promise<OutfitI[]> => {
  const response: AxiosResponse = await request({
    method: 'GET',
    url: '/outfits'
  });

  return response.data;
};
