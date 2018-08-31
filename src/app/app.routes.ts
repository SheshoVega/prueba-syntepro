import { Route } from "@angular/router";

import { DashComponent } from "./dash/dash.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";

export const routes: Route[] = [
    { path: '', component: DashComponent, outlet: 'dashboard' },
    { path: '', redirectTo: 'list', pathMatch: 'full' }, 
    { path: 'list', component: ListComponent },
    { path: 'create', component: FormComponent},
    { 
        path: 'post', 
        children: [
            { path: ':id', component: PostDetailComponent }
        ]
    }


];