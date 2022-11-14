import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Preference } from './preferences/Preference.model';
import { PreferencesModule } from './preferences/preferences.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:'postgres',
      password: 'root',
      database: 'preferences',
      entities: [
        Preference
      ]
    }),
    PreferencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
