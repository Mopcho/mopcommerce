import styled from 'styled-components';

export const StyledHero = styled.div`
	.slide-left {
		animation: slide-left 1s ease-in;
	}

	.slide-right {
		animation: slide-right 1s ease-in;
	}

	@keyframes slide-left {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes slide-right {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
`;
