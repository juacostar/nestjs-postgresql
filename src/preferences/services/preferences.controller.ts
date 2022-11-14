import { Body, Controller, Post } from '@nestjs/common';
import { GetRestaurantDTO } from 'src/dto/get.restaurant.dto';
import { PreferencesService } from './preferences.service';

@Controller('preferences')
export class PreferencesController {

    constructor(
        private preferencesService: PreferencesService
    ){}

    @Post('/restaurant')
    getRestaurant(@Body() getRestaurantDTO: GetRestaurantDTO){
        return this.preferencesService.findByName(getRestaurantDTO.preferences);
    }



}
