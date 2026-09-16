/**
 * Iconos de las aplicaciones, indexados por la ruta de su pagina.
 *
 * Estan aqui y no repartidos por cada listado porque los mismos tres productos se
 * enlazan desde ocho paginas distintas: con la ruta como llave, cualquier sitio que ya
 * sepa a donde enlaza puede pintar el icono sin declararlo, y anadir un producto es
 * tocar un unico archivo.
 *
 * Dos variantes porque la marca de Zemli es negra: sobre los morados de la casa
 * desaparece. Las otras dos tienen color propio suficiente y repiten archivo — mejor
 * que cada sitio decida por fondo y no por producto, que es lo que de verdad importa.
 */
export interface ProductLogo {
  /** Para fondos claros. */
  readonly onLight: string;
  /** Para fondos oscuros. */
  readonly onDark: string;
}

export const PRODUCT_LOGOS: Readonly<Record<string, ProductLogo>> = {
  '/pos': {
    onLight: '/images/logo-zemli-192.webp',
    onDark: '/images/logo-zemli-light-192.webp',
  },
  '/agentes-ia': {
    onLight: '/images/logo-soyalondra-192.webp',
    onDark: '/images/logo-soyalondra-192.webp',
  },
  '/plataforma-ventas': {
    onLight: '/images/logo-mesaorigen-192.webp',
    onDark: '/images/logo-mesaorigen-192.webp',
  },
};

/** Icono para fondo claro, o null si la ruta no es la de un producto. */
export function productLogoOnLight(path: string): string | null {
  return PRODUCT_LOGOS[path]?.onLight ?? null;
}
