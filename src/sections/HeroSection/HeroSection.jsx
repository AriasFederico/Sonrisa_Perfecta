import { motion } from 'framer-motion';
import { ButtonCta, TopSection } from '../../ui';
import { HeroLayout } from '../';
import styles from './HeroSection.module.scss';

export const HeroSection = ({ data, whatsappUrl }) => {
	const { topSection, title, text, cta, media } = data;

	return (
		<HeroLayout>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className={styles.content}
			>
				<TopSection
					text={topSection.text}
					iconLeft={topSection.iconLeft}
					// iconRight={topSection.iconRight}
					iconLeftClassName={styles.iconLeft}
					// iconRightClassName={styles.iconRight}
					className={styles.topSection}
				/>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.text}>{text}</p>
				<ButtonCta icon={cta.icon} text={cta.text} href={whatsappUrl} />
				<span className={styles.span}>Respondemos en 24hs. Sin compromiso</span>
			</motion.div>

			<motion.div
				className={styles.media}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2.5 }}
				// viewport={{ once: true }}
			>
				<img src={media.src} alt={media.alt} className={styles.image} />
			</motion.div>
		</HeroLayout>
	);
};
