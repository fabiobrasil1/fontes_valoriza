import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1628269294716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "colaboradores",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"

                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "admin",
                        type: "booleam",
                        default: false
                    },
                    {
                        name: "created_ad",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated-at",
                        type: "timestamp",
                        default: "now()"
                    },

                ]
                
            }) 
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("colaboradores");
    }

}
