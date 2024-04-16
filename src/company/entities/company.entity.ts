import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'companies' })
export class CompanyEntity {
    constructor() {
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'company_name', type: 'varchar', length: 100, unique: true, nullable: false })
    name: string;

    @Column({ name: 'company_focus', type: 'varchar', length: 50, nullable: false })
    focus: string;

    @Column({ name: 'company_industry', type: 'varchar', length: 50, nullable: false })
    industry: string;

    @Column({ name: 'market_presence', type: 'varchar', length: 50, nullable: false })
    marketPresence: string;

    @Column({ name: 'technological_capabilities', type: 'varchar', length: 50, nullable: false })
    technologicalCapabilities: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => UserEntity, user => user.company)
    users: UserEntity[];

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;
}