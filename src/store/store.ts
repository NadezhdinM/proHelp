import { IUser } from "../models/IUser";

import AuthService from "../services/AuthService";

import { makeAutoObservable } from "mobx";

export default class Store {
	user = {} as IUser;

	isAuth = false;
	isReg = false;
	isLoading = false;
	isActive = false;
	isWarning = false;
	activeAdd = false;
	isPopup = false;


	constructor() {
		makeAutoObservable(this);
	}

	setIsPopup(bool: boolean) {
		this.isPopup = bool;
	}

	setAuth(bool: boolean) {
		this.isAuth = bool;
	}

	setIsReg(bool: boolean) {
		this.isReg = bool;
	}

	setUser(user: IUser) {
		this.user = user;
	}

	setLoading(bool: boolean) {
		this.isLoading = bool;
	}

	setActive(bool: boolean) {
		this.isActive = bool;
	}

	async registration(email: string, password: string, history: any) {
		try {
			const response = await AuthService.registration(email, password);
			const responseToken = await AuthService.login(email, password);
			localStorage.setItem('token', responseToken.data.access);
			this.setAuth(true);
			this.setUser(response.data);
			this.setIsPopup(false);
			return history.push('/personal');
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	}

	async login(email: string, password: string, history: any) {
		try {
			const response = await AuthService.login(email, password);
			localStorage.setItem('token', response.data.access);
			this.setAuth(true);
			const responseUser = await AuthService.getProfile();
			this.setUser(responseUser.data);
			this.setIsPopup(false);
			return history.push('/personal');
		} catch (e: any) {
			console.dir(e);
		}
	}

	async logout(history: any) {
		try {
			localStorage.removeItem('token');
			this.setAuth(false);
			this.setUser({} as IUser);
			return history.push('/');
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth() {
		try {
			this.setLoading(true);
			const response = await AuthService.getProfile();
			this.setAuth(true);
			this.setUser(response.data);
			console.log(response);
		} catch (e: any) {
			console.log(e.response?.data?.message);
		} finally {
			this.setLoading(false);
		}
	}

	async setProfile(email: string, firstName: string, lastName: string, middleName: string, workPlace: string, phoneNumber: string, passportSeries: string, passportNumber: string, inn: string, birthDate: string) {
		try {
			const response = await AuthService.setProfile(email, firstName, lastName, middleName, workPlace, phoneNumber, passportSeries, passportNumber, inn, birthDate);
			console.log(response);
		} catch (e: any) {
			console.log(e);
		}
	}
}