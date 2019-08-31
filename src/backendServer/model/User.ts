import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn({generated: "uuid"})
    public id: ObjectID;

    @Column()
    public name: string;

    @Column()
    public avatar: string;

}
