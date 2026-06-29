import { iconMap } from '../../data/iconMap';
import styles from './ReviewsNumber.module.scss';
export const ReviewsNumber = ({ reviews }) => {
	const { stars, rating, text } = reviews;

	const Stars = iconMap.stars;
	return (
		<div className={styles.reviews}>
			<div className={styles.stars}>
				{[...Array(stars)].map((_, index) => (
					<Stars key={(_, index)} className={styles.starIcon} />
				))}
			</div>
			<p className={styles.rating}>{rating}</p>
			<span className={styles.span}>{text}</span>
		</div>
	);
};
