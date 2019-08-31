import UserRepository from "../repository/UserRepository";
import {User} from "../model/User";

export default class UserService {

    private userRepository = new UserRepository();

    public async saveUser(user: User): Promise<User> {
        return await this.userRepository.saveUser(user);
    }

}
