import { Component } from '@angular/core';
import TranslateDirective from '../../shared/language/translate.directive';

@Component({
  standalone: true,
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [TranslateDirective],
})
export default class FooterComponent {}
