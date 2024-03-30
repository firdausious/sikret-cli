export const NAME = 'Doppler'
export const BASE_URL = 'https://api.doppler.com'

const e = (endpoint: string) => BASE_URL + endpoint + `&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1800`
export const ENDPOINTS_V3 = {
  // secrets
  getSecretsDownload: (project = '', config = '') => e(`/v3/configs/config/secrets/download?project=${project}&config=${config}&format=json`),
}


