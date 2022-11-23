import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./login/login.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'cabelo',
    loadChildren: () => import('./cabelo/cabelo.module').then( m => m.CabeloPageModule)
  },
  {
    path: 'maquiagem',
    loadChildren: () => import('./maquiagem/maquiagem.module').then( m => m.MaquiagemPageModule)
  },
  {
    path: 'unha',
    loadChildren: () => import('./unha/unha.module').then( m => m.UnhaPageModule)
  },
  {
    path: 'massagem',
    loadChildren: () => import('./massagem/massagem.module').then( m => m.MassagemPageModule)
  },
  {
    path: 'depilacao',
    loadChildren: () => import('./depilacao/depilacao.module').then( m => m.DepilacaoPageModule)
  },
  {
    path: 'pele',
    loadChildren: () => import('./pele/pele.module').then( m => m.PelePageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
