import { PartialType } from "@nestjs/mapped-types";
import { CreateSuscripcionDto } from './create-suscripcion.dto';

export class EditSuscripcionDto extends PartialType(CreateSuscripcionDto) {

}