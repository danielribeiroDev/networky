import { CompanyEntity } from "src/company/entities/company.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
    constructor() {}

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'email', type: 'varchar', unique: true,length: 100})
    email: string

    @Column({name: 'password', type:'varchar', length: 255})
    password: string

    isConfirmed?: boolean

    @ManyToOne(() => CompanyEntity, company => company.users)
    company: CompanyEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

}