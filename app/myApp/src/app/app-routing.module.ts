import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: "table1", component: Table1Component },
      { path: "table2", component: Table2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
