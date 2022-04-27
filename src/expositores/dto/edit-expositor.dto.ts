import { PartialType } from "@nestjs/mapped-types";
import { CreateExpositorDto } from "./create-expositor.dto";

export class EditExpositorDto extends PartialType(CreateExpositorDto) {

}
