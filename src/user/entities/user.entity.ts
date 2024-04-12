import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from  'typeorm'

@Entity({  name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'email',type: 'varchar', length: 100, unique: true, nullable: false })
    email: string;

    @Column({ name: 'password',type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
    name: string;

    @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false })
    lastName: string;

    @Column({ name: 'age', type: 'int', nullable: false })
    age: number;

    @Column({ name: 'educational_background',  type: 'varchar', length: 25, nullable: false })
    educationalBackground: string;

    @Column({ name: 'professional_exp', type: 'varchar', length: 25, nullable: false })
    professionalExp: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deletedAt: Date;
}

