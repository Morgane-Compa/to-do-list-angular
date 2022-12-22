import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';  // s'importe automatiquement quand on initialise nos routes

//pour créer une page on va dans le terminal et on tape ng g c pages/nom de la page

const routes: Routes = [  //c'est ici qu'on initialise nos route pour nos pages
  {
    path: "todo/:id",   //on a mis /: id parce que ça va générer une pages d'un seul objet de notre todo liste
    component: TodoDetailsComponent   //Pour pouvoir importer le componant on fait control espace sur le TodoDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
