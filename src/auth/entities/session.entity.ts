import { ISession } from "connect-typeorm/out";
import { Column, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session implements ISession {
    @Index()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column('bigint')
    expiredAt: number = Date.now()

    @Column('text')
    json: string;

    @DeleteDateColumn()
    destroyedAt: Date;
}