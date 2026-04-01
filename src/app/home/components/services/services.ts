import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ServiceCard } from './components/serviceCard/serviceCard';

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {

  services = signal([
    {
      icon: "code",
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y escalables con las últimas tecnologías del mercado.",
    },
    {
      icon: "smartphone",
      title: "Apps Móviles",
      description:
        "Aplicaciones nativas e híbridas para iOS y Android con experiencias excepcionales.",
    },
    {
      icon: "domain",
      title: "Sistemas Empresariales",
      description:
        "ERPs, CRMs y soluciones a medida que optimizan los procesos de tu empresa.",
    },
    {
      icon: "autorenew",
      title: "Automatización de procesos",
      description:
        "Automatizaciones inteligentes para optimizar y escalar tu operación.",
    },
    {
      icon: "chat",
      title: "Chat Bots & agentes inteligentes",
      description:
        "Soluciones de atención al cliente automatizadas con inteligencia artificial.",
    },
    {
      title: "Llamadas con IA",
      icon: "call",
      description:
        "Sistemas de llamadas automatizadas con IA para mejorar la comunicación con tus clientes.",
    },
    {
      title: "Análisis predictivo y detección de fraudes",
      icon: "analytics",
      description:
        "Modelos de machine learning para predecir tendencias y detectar actividades fraudulentas.",
    },
    {
      icon: "cloud",
      title: "Cloud & DevOps",
      description:
        "Infraestructura en la nube, CI/CD y automatización para máxima eficiencia.",
    },
    {
      icon: "show_chart",
      title: "Consultoría Tech",
      description:
        "Asesoría estratégica para transformación digital y adopción de nuevas tecnologías.",
    },
  ]);

}
