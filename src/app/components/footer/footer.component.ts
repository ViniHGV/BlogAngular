import { Component } from '@angular/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { lucideGithub, lucideLinkedin } from '@ng-icons/lucide';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgFor, NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ILinksSocialMedia } from '../../models/links-social-media';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, NgFor, NgClass],
  viewProviders: [provideIcons({ lucideGithub, heroUsers, bootstrapLinkedin })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  linksSociaMedia: ILinksSocialMedia[] = [
    {
      nameIcon: 'lucideGithub',
      href: 'https://github.com/ViniHGV',
      typeIcon: 'github',
    },
    {
      nameIcon: 'bootstrapLinkedin',
      href: 'https://www.linkedin.com/in/viniciushgv/',
      typeIcon: 'linkedin',
    },
  ];
}
