import config from '../config/config'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            console.log('Appwrite error :: createAccount :: 18')
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log('Appwrite error :: createAccount :: 20')
            if(userAccount) {
                // Call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch(error) {
            console.log('Appwrite error :: createAccount :: ', error)
            // throw error;
        }
        return null;
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch(error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const res=await this.account.get();
            console.log('Auth service get current user ',res);
            // return res;
            return await this.account.get();
        } catch(error) {
            console.log('Appwrite error :: getCurrentUser ', error);
            // throw error;
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch(error) {
            console.log('Appwrite error :: logout ', error)
        }
    }
}

const authService = new AuthService();

export default authService;