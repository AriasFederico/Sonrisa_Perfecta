import { iconMap } from '../../data/iconMap';
import styles from './ReviewCard.module.scss';

export const ReviewCard = ({ stars, text, user, service }) => {
	const Stars = iconMap.stars;
	const Quotes = iconMap.quote;
	const Google = iconMap.google;

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.starsContainer}>
					{[...Array(stars)].map((_, index) => (
						<Stars key={(_, index)} className={styles.starIcon} />
					))}
				</div>
				<Quotes className={styles.quotes} />
			</div>
			<p className={styles.text}>{text}</p>
			<div className={styles.userContainer}>
				<div className={styles.userFlex}>
					<p className={styles.user}>{user}</p>
					<span className={styles.service}>{service}</span>
				</div>
				<Google className={styles.googleIcon} />
			</div>
		</div>
	);
};
