import { motion } from 'framer-motion';
import { ButtonCta } from '../../ui';
import { SectionLayout } from '../';
import styles from './CtaSection.module.scss';
export const CtaSection = ({ data, whatsappUrl }) => {
	const { title, text, cta, span } = data;
	return (
		<SectionLayout bgVariant={'primary'}>
			<motion.div
				className={styles.content}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				id='cta'
			>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<ButtonCta
					text={cta.text}
					icon={cta.icon}
					variant={'secondary'}
					href={whatsappUrl}
				/>
				<span className={styles.span}>{span}</span>
			</motion.div>
		</SectionLayout>
	);
};
