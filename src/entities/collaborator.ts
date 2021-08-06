import {Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("Collaborators")

class collaborator {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    admin: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;    

    constructor(){
        if(!this.id){
            this.id = uuid();
        }

    }
}


export { collaborator }
