import { Module } from '@nestjs/common';
import { PreferencesService } from './services/preferences.service';
import { PreferencesController } from './services/preferences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preference } from './Preference.model';

@Module({
  imports:[
    TypeOrmModule.forFeature([Preference])
  ], 
  providers: [PreferencesService],
  controllers: [PreferencesController]
})
export class PreferencesModule {}
