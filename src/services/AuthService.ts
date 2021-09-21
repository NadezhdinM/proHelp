import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { IUser } from '../models/IUser';

export default class AuthService {

	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/auth/token/', {
			"email": email,
			"password": password,
		})
	}	

	static async registration(email: string, password: string): Promise<AxiosResponse<IUser>> {
		return $api.post<IUser>('/users/', {
			"email": email,
			"password": password,
		})
	}

	static async getProfile(): Promise<AxiosResponse<IUser>> {
		return $api.get<IUser>('/users/profile/', { withCredentials: true })
	}

	static async setProfile(email: string, firstName: string, lastName: string, middleName: string, workPlace: string, phoneNumber: string, passportSeries: string, passportNumber: string, inn: string, birthDate: string): Promise<AxiosResponse<any>> {
		return $api.post<any>('/users/set_profile/', {
			"email": email,
			"first_name": firstName,
			"last_name": lastName,
			"middle_name": middleName,
			"work_place": workPlace,
			"phone_number": phoneNumber,
			"passport_series": passportSeries,
			"passport_number": passportNumber,
			"inn": inn,
			"birth_date": birthDate,
			"set_address": {
				"post_index": "123654",
				"subject": "Нижегородская обл",
				"city": "Арзамас",
				"district": "Арзамасский",
				"street": "Ленина",
				"house": "33",
				"apartment_number": 3
			}
		  })
	}

}