import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly _commandBus: CommandBus) {
    // this._logger.setContext(NotificationController.name);
  }

  @EventPattern('message_printed')
  async handleSendNotification(data: Record<string, unknown>) {
    // this._logger.debug('handleSendNotification...');
    // this._commandBus.execute(new NotificationCommand('Titulo', 'Text'));
    console.log(data);
    // return new AppService().getHello();
    // return this._commandBus.execute(new AppService().getHello());
  }

  @MessagePattern('message_printed')
  async handleNotification(data: Record<string, unknown>) {
    // this._logger.debug('handleSendNotification...');
    // this._commandBus.execute(new NotificationCommand('Titulo', 'Text'));
    console.log(data);
    return new AppService().getHello();
    // return this._commandBus.execute(new AppService().getHello());
  }
}
