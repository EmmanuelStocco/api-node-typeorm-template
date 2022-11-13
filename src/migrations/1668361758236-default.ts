import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668361758236 implements MigrationInterface {
    name = 'default1668361758236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "name" text NOT NULL, "user_id" integer, CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
