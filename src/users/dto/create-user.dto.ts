import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

// DTO = Data Transfer Object // class = {email, password, name, address}
export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'Email không đúng định dạng',
    },
  )
  @IsNotEmpty({
    message: 'Email không được để trống',
  })
  email: string;

  @IsNotEmpty({
    message: 'Mật khẩu không được để trống',
  })
  password: string;

  //   @IsString()
  name: string;

  //   @IsString()
  address: string;
}
