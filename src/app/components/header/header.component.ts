import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks = [
    { name: 'Principais Noticias', url: '' },
    { name: 'Categorias', url: '' },
  ];
  @Input() linkSelected: string = '';

  handleLinkSecelted(linkName: string) {
    this.linkSelected = linkName;
  }
}
