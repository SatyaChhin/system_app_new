
import  moment  from 'moment';
import { useI18n } from 'vue-i18n'

export const useUtils = () => {
    const localePath = useLocalePath();
    const toast = useToast();
    const route = useRoute();
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl;
    const tranformDateObject = (month, year) => {
        return new Date(year, month, 1).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }


    return {
        moment,
        useI18n,
        tranformDateObject,
        toast,
        localePath,
        route,
        baseUrl
    };

};