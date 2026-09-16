import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { productLogoOnLight } from '../../brand/product-logos';
import { Reveal } from '../../directives/reveal';


export interface RelatedLink {
  readonly label: string;
  readonly path: string;
  readonly description: string;
}

/** Contextual internal links that connect a page with its neighbouring intents. */
@Component({
  selector: 'app-related-links',
  imports: [RouterLink, Reveal],
  templateUrl: './related-links.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedLinks {
  readonly heading = input('Sigue explorando');
  readonly links = input.required<readonly RelatedLink[]>();

  /**
   * El icono se deduce del destino, no se declara en cada listado: estos enlaces se
   * escriben en ocho paginas y tarde o temprano una se quedaria sin el. Las tarjetas
   * son blancas, asi que siempre toca la variante para fondo claro. Devuelve null en
   * los enlaces que no van a un producto —facturacion, blog, contacto— y esos se
   * quedan sin icono, que es lo correcto: no son aplicaciones.
   */
  protected readonly logoFor = productLogoOnLight;
}
