import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export function useCustomFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  const { $i18n } = useNuxtApp();
  const token = '';
  const defaults: UseFetchOptions<T> = {
    baseURL: config.baseUrl,
    key: url,
    
    // set user token if connected
    headers: {
        "Accept-Language": $i18n.locale.value,
        "Authorization": token ? `Bearer ${token}` : {},
    },

    onResponse (_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError (_ctx) {
      // throw new myBusinessError()
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
