import { CompraComponent } from './compra.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


export class LeaveComprasGuard implements CanDeactivate<CompraComponent> {

    canDeactivate(
        compraComponent: CompraComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot ): boolean {

            if (!compraComponent.isCompraFinalizada()) {
               return window.confirm('Deseja desistir da compra?');
            } else {
                return true;
            }
    }
}
