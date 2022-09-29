import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
import { generateSecret, totp } from 'speakeasy';

@Controller('auth')
export class AuthController {
  public secretBase32: string;

  @Get('qr-code')
  @Header('content-type', 'text/html')
  async getQRCode(@Req() req): Promise<any> {
    try {
      const secret = generateSecret({
        name: 'Text to show in Auth App ', //display text in Google Auth App, you can put your domain and user email here
        length: 16, //length of base32, this prop must be 8 multiple with limit at 32
      });

      //secret.base32 this prop used by check the user token input with logic in speakeasy
      this.secretBase32 = secret.base32;

      return `<a title=''>
          <img src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${secret.otpauth_url}' border=0>
        </a>
        <p>${secret.base32}</p>`;
    } catch (err) {
      console.error('ERRO', err);
    }
  }

  @Post('validate')
  async getQRCodeValidate(@Body() body): Promise<boolean> {
    try {
      const verify = totp.verify({
        secret: this.secretBase32,
        encoding: 'base32',
        token: body.token,
      });

      return verify;
    } catch (err) {
      console.error('ERRO', err);
    }
  }
}
