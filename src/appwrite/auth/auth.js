import conf from "../../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.userLogin({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("error occured", error);
    }
  }

  async userLogin({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
      const loggedInUser = this.account.get();
      return loggedInUser;
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null; // in case if there is some problem with try catch
  }

  async userLogout() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();
export default authService;
