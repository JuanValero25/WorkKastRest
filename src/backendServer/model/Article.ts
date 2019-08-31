import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class Article {

    @ObjectIdColumn({generated: "uuid"})
    public id: ObjectID;

    @Column()
    public userId: string;

    @Column()
    public title: string;

    @Column()
    public text: string;

    @Column()
    public tags: string[];

}
