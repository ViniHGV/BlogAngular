import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { NavLinks } from '../../models/nav-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks: NavLinks[] = [
    { name: 'Principais Noticias', url: '#main-news' },
    { name: 'Categorias', url: '#categories' },
  ];
  @Input() linkSelected: string = '';

  handleLinkSecelted(linkName: string) {
    this.linkSelected = linkName;
  }
}
