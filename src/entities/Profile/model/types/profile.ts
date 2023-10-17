import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile; /* то, что наизменял сам польователь */
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
