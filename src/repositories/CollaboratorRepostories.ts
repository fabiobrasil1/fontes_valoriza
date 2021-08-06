import { EntityRepository, Entity, Repository  } from "typeorm";
import { collaborator } from "../entities/collaborator";


@EntityRepository(collaborator)
class CollaboratorsRepositories extends Repository<collaborator>{

}


export { CollaboratorsRepositories }