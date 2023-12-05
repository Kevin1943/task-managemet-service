import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './service/auth.service';
import { AuthController } from './../../controllers/auth/auth.controller';
import { UsersModule } from '../users/user.module';
import { LocalStrategy } from './service/local.strategy';
import { JwtStrategy } from './service/jwt.strategy';

// TODO adjust the "exipresToken", "secret" to env
@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'jwt-secret',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
