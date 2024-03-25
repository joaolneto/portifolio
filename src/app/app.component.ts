import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component'
import { ContactComponent } from './components/contact/contact.component'
import { CountersComponent } from './components/counters/counters.component'
import { ServiceComponent } from './components/service/service.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { WorkComponent } from './components/work/work.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    CountersComponent,
    ServiceComponent,
    TestimonialsComponent,
    WorkComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}
