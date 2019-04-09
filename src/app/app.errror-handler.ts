import { LoginService } from './security/login/login.service';
import { NotificationService } from './compartilhada/messages/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/Observable/throw';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

    constructor(private notificationService: NotificationService,
        private injector: Injector,
        private ngZone: NgZone
    ) {
        super();
    }

    HandleError(httpErrorResponse: HttpErrorResponse | any) {
        if (httpErrorResponse instanceof HttpErrorResponse) {
            const message = httpErrorResponse.error.messages;
            this.ngZone.run(() => {
                switch (httpErrorResponse.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin()
                        break;
                    case 403:
                        this.notificationService.notify(message || 'Não autorizado.');
                        break;
                    case 404:
                        this.notificationService.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.');
                        break;
                }
            })
        }

        super.handleError(httpErrorResponse);
    }
}
