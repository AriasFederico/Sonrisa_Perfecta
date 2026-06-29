import { motion } from 'framer-motion';
import { ItemCard, TopSection } from '../../ui';
import { SectionLayout } from '..';
import styles from './ValueProposition.module.scss';
export const ValueProposition = ({ data }) => {
	const { topSection, title, text, cards } = data;
	return (
		<SectionLayout id={'about'}>
			<motion.div
				className={styles.content}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				viewport={{ once: true }}
			>
				<TopSection text={topSection} className={styles.topSection} />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<div className={styles.cards}>
					{cards?.map(({ icon, title, text }) => (
						<ItemCard title={title} text={text} key={title} icon={icon} />
					))}
				</div>
			</motion.div>
		</SectionLayout>
	);
};
