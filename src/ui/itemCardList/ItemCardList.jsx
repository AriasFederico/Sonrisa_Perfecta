import { iconMap } from '../../data/iconMap';
import { ButtonCta } from '../';

import styles from './ItemCardList.module.scss';
export const ItemCardList = ({
	icon,
	span,
	title,
	subtitle,
	text,
	list,
	cta,
	wsp_base,
}) => {
	const Icon = iconMap[icon];

	return (
		<div className={styles.itemCardList}>
			<div className={styles.flex}>
				<div className={styles.icon_container}>
					<Icon className={styles.icon} />
				</div>
				<span className={styles.span}>{span}</span>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<h4 className={styles.subtitle}>{subtitle}</h4>
			<p className={styles.text}>{text}</p>
			<ul className={styles.list}>
				{list?.map((li) => (
					<li key={li} className={styles.listItem}>
						. {li}
					</li>
				))}
			</ul>
			<ButtonCta
				variant='secondary'
				size='sm'
				href={`${wsp_base}${cta.waText}`}
				text={cta.text}
				icon={cta.icon}
			/>
		</div>
	);
};
