import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { DealsComponent } from "./deals/deals.component";
import { LeadsComponent } from "./leads/leads.component";

const routes: Routes = [
  {
    path: "deals",
    component: DealsComponent
  },
  {
    path: "leads",
    component: LeadsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
