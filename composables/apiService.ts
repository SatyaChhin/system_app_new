import { useI18n } from "vue-i18n";
export const apiService = () => {
  const {locale} = useI18n()
  const token = '';
  const getService = (url) => {
      const data = useFetch(url, {
        onRequest({ request, options }) {
          // Set the request headers
          options.headers = {
            "Accept-Language": locale.value,
            "Authorization": `Bearer ${token}`
          }
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors
        },
        onResponse({ request, response, options }) {
          // Process the response data
          localStorage.setItem('token', response._data.token)
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        }
      })
      return data;
  }


  return {
    getService,
  };

};