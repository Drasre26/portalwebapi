import { PartialType } from "@nestjs/mapped-types";
import { CreateExpositorEventoDto } from './create-expositorevento.dto';

export class EditExpositorEventoDto extends PartialType(CreateExpositorEventoDto) {

}