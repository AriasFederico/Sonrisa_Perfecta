import { motion } from 'framer-motion';
import { ItemCardList, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './Services.module.scss';
export const Services = ({ data, whatsappNumber }) => {
	const { topSection, title, text, cards } = data;
	const wsp_base = `https://wa.me/${whatsappNumber}?text=`;

	return (
		<SectionLayout bgVariant={'soft'}>
			<motion.div
				className={styles.content}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<TopSection text={topSection} className={styles.topSection} />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<div className={styles.cards}>
					{cards?.map(({ icon, title, text, list, cta, span, subtitle }) => (
						<ItemCardList
							key={title}
							subtitle={subtitle}
							icon={icon}
							title={title}
							text={text}
							list={list}
							cta={cta}
							span={span}
							wsp_base={wsp_base}
						/>
					))}
				</div>
			</motion.div>
		</SectionLayout>
	);
};
