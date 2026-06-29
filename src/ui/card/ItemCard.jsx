import { iconMap } from '../../data/iconMap';
import styles from './ItemCard.module.scss';

export const ItemCard = ({ icon, title, text, className }) => {
	// en caso te usar react-icon
	const IconComponent = iconMap[icon];

	return (
		<div className={styles.card}>
			{icon && (
				<div className={styles.icon_container}>
					<IconComponent className={styles.icon} />
				</div>
			)}
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
		</div>
	);
};
