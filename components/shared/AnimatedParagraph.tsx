import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface AnimatedParagraphProps extends HTMLMotionProps<'p'> {
	children: React.ReactNode;
	className?: string;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
	children,
	className = '',
	...motionProps
}) => (
	<motion.p
		className={className}
		{...motionProps}
	>
		{children}
	</motion.p>
);

export default AnimatedParagraph;
