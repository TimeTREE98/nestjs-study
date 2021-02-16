import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // URL을 가져오고 함수를 실행. express에서 라우트와 같은 역할
  providers: [AppService],
})
export class AppModule {}
