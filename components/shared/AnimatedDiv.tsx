import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface AnimatedDivProps extends HTMLMotionProps<'div'> {
	children: React.ReactNode;
	className?: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
	children,
	className = '',
	...motionProps
}) => (
	<motion.div
		className={className}
		{...motionProps}
	>
		{children}
	</motion.div>
);

export default AnimatedDiv;
