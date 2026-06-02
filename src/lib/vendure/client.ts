import { VendureClientPlaceholder } from './types';

/**
 * Placeholder Vendure client.
 * Replace with full Shop API/Admin API implementation when commerce features
 * (courses, digital products, gated content) go live.
 */
const client: VendureClientPlaceholder = {
  apiUrl: process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL || '',
  channelToken: process.env.NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN || '',
};

export default client;
