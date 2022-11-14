import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, DataSource, Repository } from 'typeorm';
import { Preference } from '../Preference.model';

@Injectable()
export class PreferencesService {

    private  PostgresDataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:'postgres',
        password: 'root',
        database: 'preferences',
        entities:[
            Preference
        ]
    })


    constructor(
        @InjectRepository(Preference) private preferencesRepository: Repository<Preference>
    ){}

    findByName(name: string){
        let preference = new Preference

        //return this.PostgresDataSource.manager.createQueryBuilder()
        //.select('preference')
        //.from(Preference, 'preference')
        //.where('preference.name = :name', {name: name}).getOne();
        return this.preferencesRepository.createQueryBuilder('preference')
        .where('preference.name = :name', {name: name}).getOne();
        //return this.preferencesRepository.find();
    }


}
