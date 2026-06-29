import { iconMap } from '../../data/iconMap';
import { Logo } from '../../ui';
import { CopyRight } from './copyright/CopyRight';
import styles from './Footer.module.scss';
export const Footer = ({ logo, data }) => {
	const { href, clinicName, secondName, src } = logo;
	const { text, hours, location } = data;

	const IconHours = iconMap[hours.icon];
	const IconLocation = iconMap[location.icon];
	const IconPhone = iconMap[location.phone.icon];

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.about}>
					<Logo
						href={href}
						src={src}
						alt={clinicName}
						clinicName={clinicName}
						secondName={secondName}
						classNameText={styles.logoNameText}
					/>
					<p className={styles.text}>{text}</p>
				</div>
				{/* ---------------------------------------------------- */}
				<div className={styles.hours}>
					<div className={styles.hoursHeader}>
						<IconHours className={styles.icon} />
						<h3 className={styles.title}>{hours.title}</h3>
					</div>
					<div className={styles.listItems}>
						{hours.info?.map(({ day, hours }) => (
							<div key={day} className={styles.item}>
								<p className={styles.day}>{day}:</p>
								<p className={styles.hour}>{hours}</p>
							</div>
						))}
					</div>
				</div>
				{/* ---------------------------------------------------- */}

				<div className={styles.location}>
					<div className={styles.locationHeader}>
						<IconLocation className={styles.icon} />
						<h3 className={styles.title}>{location.title}</h3>
					</div>

					<div className={styles.locationCard}>
						<p>{location.info.text}</p>
						<span>{location.info.span}</span>
					</div>

					<div className={styles.phoneCard}>
						<IconPhone className={styles.icon} />
						<span>{location.phone.text}</span>
					</div>
				</div>
			</div>

			<CopyRight data={clinicName} />
		</footer>
	);
};
