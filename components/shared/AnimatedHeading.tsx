import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface AnimatedHeadingProps extends HTMLMotionProps<'h1'> {
	children: React.ReactNode;
	className?: string;
	as?: 'h1' | 'h2';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
	children,
	className = '',
	as = 'h1',
	...motionProps
}) => {
	const Tag = as;
	return (
		<motion.div {...motionProps}>
			<Tag className={className}>{children}</Tag>
		</motion.div>
	);
};

export default AnimatedHeading;
