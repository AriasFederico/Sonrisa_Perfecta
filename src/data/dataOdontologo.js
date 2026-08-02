import imageHero from '../assets/heroSection.webp';
import logo from '../assets/logo.webp';

const CLINIC_NAME = 'Centro LAM';
const SECOND_NAME = 'CLINICA DENTAL';
const PHONE_NUMBER = '5492213186889'; // Número sin espacios ni símbolos (+, -, etc.)

const buildWaLink = (message) =>
	`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const dataOdontologo = {
	logo: {
		src: logo,
		clinicName: CLINIC_NAME,
		secondName: SECOND_NAME,
	},

	header: {
		nav_links: [
			{ text: 'Nosotros', href: '#about' },
			{ text: 'Tratamientos', href: '#services' },
			{ text: 'Contacto', href: '#footer' },
		],
		cta: {
			text: 'Agendar turno',
			icon: 'chat',
		},
	},

	hero: {
		topSection: {
			text: '+500 pacientes satisfechos',
			iconLeft: 'shield',
			iconRight: 'star',
		},
		title: 'Recuperá la confianza en ',
		text: 'Turnos rápidos, atención sin dolor y tecnología avanzada. Tu comodidad es nuestra prioridad.',
		cta: {
			text: 'Agendar turno',
			icon: 'chat',
		},
		media: {
			alt: 'Profesional de la salud dental',
			src: imageHero,
		},
	},

	valueProposition: {
		topSection: '¿Por qué elegirnos?',
		title: 'Tu comodidad, ',
		text: 'Diseñamos cada visita para que te vayas con una sonrisa, no solo en tu cara sino en tu experiencia.',
		cards: [
			{
				icon: 'heart',
				title: 'Atención sin dolor ni estrés',
				text: 'Usamos técnicas modernas de anestesia y sedación consciente para que tu experiencia sea completamente cómoda.',
			},
			{
				icon: 'clock',
				title: 'Turnos puntuales',
				text: 'Respetamos tu tiempo. Nos comprometemos a que nunca esperes más de 10 minutos para tu atención.',
			},
			{
				icon: 'medal',
				title: 'Especialistas certificados',
				text: 'Nuestro equipo cuenta con formación de posgrado y actualización continua en las últimas técnicas dentales.',
			},
			{
				icon: 'usd',
				title: 'Precios transparentes',
				text: 'Sin letras chicas ni sorpresas. Te informamos el costo total antes de comenzar cualquier tratamiento.',
			},
		],
	},

	services: {
		topSection: 'Nuestros tratamientos',
		title: 'Tratamientos que ',
		text: 'Cada tratamiento es diseñado a medida. No hay dos sonrisas iguales.',
		// CAMBIAR EL WATEXT ADAPTARLO A CADA SEVICIO -----------------------------------------------------------------------------
		cards: [
			{
				icon: 'implants',
				span: 'Más solicitado',
				title: 'Implantes Dentales',
				subtitle: 'Volvé a comer lo que te gusta',
				text: 'La solución definitiva y natural para dientes perdidos. Se integra perfectamente al hueso y dura toda la vida con el cuidado correcto.',
				list: [
					'Titanio de grado médico',
					'Resultado estético permanente',
					'Sin dolor post-operatorio',
				],
				cta: {
					href: buildWaLink(
						'Hola!, Me interesa el tratamiento de Implantes Dentales',
					),
					text: 'Consultar tratamiento',
					icon: 'chat',
				},
			},
			{
				icon: 'smile',
				span: 'Sin que nadie lo note',
				title: 'Ortodoncia Invisible',
				subtitle: 'Alineá tus dientes en secreto',
				text: 'Alineadores transparentes a medida que corrigen tu sonrisa gradualmente, sin brackets ni incomodidades visibles en tu día a día.',
				list: [
					'100% removibles',
					'Consulta de diagnóstico gratis',
					'Seguimiento digital',
				],
				cta: {
					href: buildWaLink(
						'Hola!, Me interesa el tratamiento de Ortodoncia Invisible',
					),
					text: 'Consultar tratamiento',
					icon: 'chat',
				},
			},
			{
				icon: 'zap',
				span: 'Resultados en 1 sesión',
				title: 'Blanqueamiento Express',
				subtitle: 'Sonrisa brillante en una sesión',
				text: 'Tecnología LED de última generación que aclara varios tonos en una sola visita de 60 minutos. Resultado inmediato y duradero.',
				list: [
					'Hasta 8 tonos más blanco',
					'Sin sensibilidad',
					'Efecto duradero 12 meses',
				],
				cta: {
					href: buildWaLink(
						'Hola!, Me interesa el tratamiento de Blanqueamiento Express',
					),
					text: 'Consultar tratamiento',
					icon: 'chat',
				},
			},
		],
		// CAMBIAR EL WATEXT ADAPTARLO A CADA SEVICIO -----------------------------------------------------------------------------
	},

	testimonies: {
		topSection: 'Lo que dicen nuestros pacientes',
		title: 'Sonrisas que hablan',
		text: 'Más de 500 pacientes ya eligieron confiar en nosotros. Estas son sus historias.',
		reviewsRating: {
			stars: 5,
			rating: '5.0',
			text: '· +180 reseñas en Google',
		},
		testimonies: [
			{
				stars: 5,
				text: 'Nunca imaginé que ir al dentista pudiera ser tan tranquilo. Me explicaron todo desde el principio, sin apuros. En 8 meses mi sonrisa cambió completamente y nadie notó que tenía ortodoncia.',
				user: 'Valentina R.',
				service: 'Ortodoncia Invisible · Paciente desde 2023',
			},
			{
				stars: 5,
				text: 'Después de años con vergüenza de sonreír, finalmente me animé al implante. El procedimiento fue mucho menos intimidante de lo que pensaba y el resultado es increíble. Volvería 100 veces.',
				user: 'Martín G.',
				service: 'Implantes Dentales · Paciente desde 2024',
			},
			{
				stars: 5,
				text: 'Fui por el blanqueamiento antes de mi casamiento y quedé fascinada. En una hora salí con una sonrisa completamente diferente. El equipo es súper amable y profesional. Recomiendo a todos mis amigos.',
				user: 'Lucia F.',
				service: 'Blanqueamiento Express · Paciente desde 2022',
			},
		],
	},

	ctaSection: {
		title: '¿Lista para transformar tu sonrisa?',
		text: 'Nuestro equipo te espera. Agenda tu consulta gratuita hoy mismo.',
		cta: { text: 'Agendar turno por WhatsApp', icon: 'chat' },
		span: 'Primera consulta sin cargo · Respondemos en minutos',
	},

	footer: {
		text: 'Clínica dental especializada en brindar atención de primer nivel con tecnología de vanguardia y un enfoque completamente centrado en el paciente.',
		hours: {
			icon: 'clock',
			title: 'Horario de atención',
			info: [
				{ day: 'Lunes - Viernes', hours: '09:00 - 20:00' },
				{ day: 'Sábado', hours: '09:00 - 14:00' },
				{ day: 'Domingo', hours: 'Cerrado' },
			],
			aditional: {
				icon: 'chat',
				text: 'Atendemos con turno previo.',
			},
		},
		location: {
			icon: 'location',
			title: 'Ubicación',
			info: {
				text: 'Av. [Nombre de la Calle] 1234, Piso 2, Of. 5',
				span: '[Barrio] · [Ciudad], Argentina',
			},
			cta: {
				icon: 'chat',
				text: 'Escribinos por WhatsApp',
			},
			phone: {
				icon: 'phone',
				text: '+54 9 11 0000-0000',
			},
		},
	},
};
