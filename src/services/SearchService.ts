import $api from '../http';
import { AxiosResponse } from 'axios';
import { SearchResponse } from '../models/response/SearchResponse';

export default class SearchService {

	static async desiaseSearch(search_text: string): Promise<AxiosResponse<SearchResponse>> {
		return $api.get<SearchResponse>('/search_diagnosis/', {
			params: {
				search: search_text
			}
		})
	}
	static async medicalSearch(search_text: string): Promise<AxiosResponse<SearchResponse>> {
		return $api.get<SearchResponse>('/search_medicalinstitution/', {
			params: {
				search: search_text
			}
		})
	}
}