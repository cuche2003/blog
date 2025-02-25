import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { IBlog } from '../blog.model';
import HasAnyAuthorityDirective from '../../../shared/auth/has-any-authority.directive';

@Component({
  standalone: true,
  selector: 'jhi-blog-detail',
  templateUrl: './blog-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe, HasAnyAuthorityDirective],
})
export class BlogDetailComponent {
  blog = input<IBlog | null>(null);

  previousState(): void {
    window.history.back();
  }
}
