import { IsOptional, IsString, ValidateNested } from '_core/_auth/_middlewares/class-validator';
import CreateAddressDto from './address.dto';

class CreateUserDto {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsOptional()
  @ValidateNested()
  public address?: CreateAddressDto;
}

export default CreateUserDto;