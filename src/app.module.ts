import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EstudiantesController } from './modules/estudiantes/controllers/estudiantes.controller';
import { RelacionesModule } from './modules/relaciones/relaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),

    EstudiantesModule,
    DatabaseModule,
    RelacionesModule,
  ],
  controllers: [AppController, EstudiantesController],
  providers: [AppService],
})
export class AppModule {}
