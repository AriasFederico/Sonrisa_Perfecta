import { motion } from 'framer-motion';
import { ReviewCard, ReviewsNumber, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './TestimoniesSection.module.scss';
export const TestimoniesSection = ({ data }) => {
	const { topSection, title, text, testimonies, reviewsRating } = data;
	return (
		<SectionLayout>
			<motion.div
				className={styles.content}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<TopSection text={topSection} className={styles.topSection} />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<ReviewsNumber reviews={reviewsRating} />
				<div className={styles.cards}>
					{testimonies?.map(({ stars, text, user, service }) => (
						<ReviewCard
							stars={stars}
							text={text}
							user={user}
							service={service}
							key={user}
						/>
					))}
				</div>
			</motion.div>
		</SectionLayout>
	);
};
