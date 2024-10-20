import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agreement',
  standalone: true,
  imports: [],
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.css'
})
export class AgreementComponent {

 constructor(private router: Router) {}
goto(){
  this.router.navigate(['/privacypolicy']).then(() => {
    // Scroll to the top of the page after navigation
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
}
