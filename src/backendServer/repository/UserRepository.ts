import {getMongoManager, MongoEntityManager} from "typeorm";
import {User} from "../model/User";

export default class UserRepository {

    private mongoManager: MongoEntityManager;

    constructor() {
        this.mongoManager = getMongoManager();
    }

    public async saveUser(user: User): Promise<User> {
        return await this.mongoManager.save(user);
    }
}
