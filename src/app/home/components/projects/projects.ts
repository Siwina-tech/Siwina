import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  steps = signal([
    {
      number: '01',
      title: 'Consulta Inicial',
      description:
        'Escuchamos tus necesidades y objetivos de negocio para definir juntos el alcance y la visión del proyecto.',
      icon: 'handshake',
    },
    {
      number: '02',
      title: 'Estrategia y Diseño',
      description:
        'Diseñamos la arquitectura técnica, prototipos y un roadmap detallado con tiempos y entregables claros.',
      icon: 'draw',
    },
    {
      number: '03',
      title: 'Desarrollo Ágil',
      description:
        'Construimos tu solución con sprints semanales, demos frecuentes y comunicación constante en cada fase.',
      icon: 'code',
    },
    {
      number: '04',
      title: 'Entrega y Soporte',
      description:
        'Lanzamos tu producto con pruebas exhaustivas y brindamos acompañamiento continuo post-lanzamiento.',
      icon: 'rocket_launch',
    },
  ]);

  stats = signal([
    { value: '98%', label: 'Satisfacción del cliente' },
    { value: '< 24h', label: 'Tiempo de respuesta' },
    { value: '100%', label: 'Entregas a tiempo' },
    { value: '24/7', label: 'Soporte disponible' },
  ]);
}
