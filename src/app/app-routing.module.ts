import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoPriveComponent } from './memo/memo-prive/memo-prive.component';
import { MemoComponent } from './memo/memo.component';

const routes: Routes = [
  {path: 'memos', component: MemoComponent},
  {path: 'memos-prive', component: MemoPriveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
