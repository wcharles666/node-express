import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// 装饰器

// 换表的名称

@Entity()
// @Entity('Users')
export class User {
    // 主键 是唯一标识数据库的表中的一条数据,自动增加
    // @PrimaryGeneratedColumn("uuid")
    // id: string;
    @PrimaryGeneratedColumn()
    id: number;

    // uuid

    @Column("varchar")
    userName: string;

    @Column("varchar", { unique: true })
    phone: string;

    @Column("varchar", { unique: true })
    email: string;

    @Column("text")
    password: string;

    @Column("decimal", { precision: 10, scale: 2, default: 0.0 })
    money: number;

    // 对于boolean 一般需设置个默认值
    @Column("boolean", { default: false })
    isAdmin: boolean;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    // @Column("decimal", { precison: 2, scale: 2 })
    // @Column("decimal", { precison: 2, scale: 2 })
    // newName1: number;

    // fullName(): string {
    //     const { firstName, lastName } = this;
    //     return `${firstName} ${lastName}`;
    // }
}
