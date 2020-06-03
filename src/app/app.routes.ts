import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { EstadoComponent } from './views/estado/estado.component';
import { CidadeComponent } from './views/cidade/cidade/cidade.component';
import { HomeComponent } from './views/home/home.component';
import { EstadoPrimengComponent } from './views/estado-primeng/estado-primeng.component';
import { CidadePrimengComponent } from './views/cidade-primeng/cidade-primeng.component';
import { PessoaComponent } from "./views/pessoa/pessoa.component";
import { CestComponent } from "./views/cest/cest.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'estados', component: EstadoComponent},
    {path: 'estados_primeng', component: EstadoPrimengComponent},
    {path: 'cidades', component: CidadeComponent},
    {path: 'cidades_primeng', component: CidadePrimengComponent},
    {path: 'pessoa_cadastro', component: PessoaComponent},
    {path: 'produto_cest', component: CestComponent},


];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
