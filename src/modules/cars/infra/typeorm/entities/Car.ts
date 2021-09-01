import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";

@Entity("cars")
class Car {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;

    @Column()
    available: boolean;

    @Column()
    license_plate: string;

    @Column()
    file_amount: number;
    
    @Column()
    brand: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category: Category;
    
    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    // this is temporary used for testing create car use case spec
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.available = true;
        }
    }
}

export { Car }