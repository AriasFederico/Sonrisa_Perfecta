import './App.css';
import { dataOdontologo } from './data/dataOdontologo';
import {
	CtaSection,
	Footer,
	Header,
	HeroSection,
	Services,
	TestimoniesSection,
	ValueProposition,
} from './sections/';

function App() {
	const {
		logo,
		hero,
		header,
		whatsappNumber,
		valueProposition,
		services,
		testimonies,
		ctaSection,
		footer,
	} = dataOdontologo;

	const whatsAppUrl = `https://wa.me/${whatsappNumber}?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20un%20turno.`;

	return (
		<div className='App'>
			<Header data={header} whatsAppUrl={whatsAppUrl} logo={logo} />
			<HeroSection data={hero} whatsappUrl={whatsAppUrl} />
			<ValueProposition data={valueProposition} />
			<Services data={services} whatsappNumber={whatsappNumber} />
			<TestimoniesSection data={testimonies} />
			<CtaSection data={ctaSection} whatsappUrl={whatsAppUrl} />
			<Footer logo={logo} data={footer} />
		</div>
	);
}

export default App;
