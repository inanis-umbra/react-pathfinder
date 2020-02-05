import React, { memo } from 'react';
import { default as ErrorBoundary } from './_error_boundary';

/*TODO - finish layout component to wrap modules in */

function Layout(props) {
	const { children, className } = props;
	return (
		<ErrorBoundary className={className}>
			{children}
		</ErrorBoundary>
	)
};

export default memo(Layout);
