import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { ButtonCta, Logo } from '../../ui';
import styles from './Header.module.scss';

export const Header = ({ data, whatsAppUrl, logo }) => {
	const { nav_links, cta } = data;
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const BurgerIcon = isOpen ? BsX : BsList;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 900) {
				setIsOpen(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<motion.div
			className={styles.header}
			initial={{ y: -50 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<div className={styles.container}>
				<Logo
					clinicName={logo.clinicName}
					secondName={logo.secondName}
					src={logo.src}
					className={styles.logoImage}
				/>
				<nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
					{nav_links.map((link) => (
						<a
							key={link.text}
							href={link.href}
							className={styles.link}
							onClick={() => setIsOpen(false)}
						>
							{link.text}
						</a>
					))}
					<div className={styles.ctaMobile}>
						<ButtonCta
							size='sm'
							icon={cta.icon}
							text={cta.text}
							onCLick={() => setIsOpen(false)}
							href={whatsAppUrl}
						/>
					</div>
				</nav>

				<div className={styles.cta}>
					<ButtonCta
						size='sm'
						icon={cta.icon}
						text={cta.text}
						onCLick={() => setIsOpen(false)}
						href={whatsAppUrl}
					/>
				</div>
				<button
					type='button'
					className={styles.burger}
					onClick={toggleMenu}
					aria-label='Menu'
				>
					<BurgerIcon className={styles.icon} />
				</button>
			</div>
		</motion.div>
	);
};
