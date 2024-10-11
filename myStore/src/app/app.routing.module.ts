import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Importa tus rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas aquí
  exports: [RouterModule]
})
export class AppRoutingModule {}
