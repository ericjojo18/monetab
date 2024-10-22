import { Routes } from '@angular/router';

import { AppSettingComponent } from './app-setting/app-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';



export const routes: Routes = [

    { path: 'login', title:"Login", component: LoginComponent },
    { path: '', component: HeaderComponent, 
        children: [
            { path: 'dashboard', title:"Dashboard", component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'report', component: ReportComponent },
            { path: 'school', component: SchoolComponent },
            { path: 'student', component: StudentComponent },
            { path: 'teacher', component: TeacherComponent },
            { path: 'user', component: UserComponent },
            { path: 'app-setting', component: AppSettingComponent },
    ] },

];


export class AppRoutingModule { }
