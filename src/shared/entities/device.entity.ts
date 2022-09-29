import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  deviceId: string;
  @Column({ nullable: true })
  temperature: number;
  @Column({ nullable: true })
  humidity: number;
  @Column({ nullable: true })
  occupancy: boolean;
}
