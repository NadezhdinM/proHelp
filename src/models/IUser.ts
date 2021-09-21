export interface IUser {
	address: string;
	email: string;
	id: number;
	is_verified: boolean
	patients: any[];
	profile: any;
	role: string;
}