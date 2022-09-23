import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, typography } from "../constants";

interface Props {
	right?: boolean;
	left?: boolean;
	text: string;
}

const NormalText: FC<Props> = ({ text, left, right }) => (
	<StyledText style={{ textAlign: left ? "left" : right ? "right" : "center" }}>
		{text}
	</StyledText>
);

interface LinkProps extends Props {
	to: string;
}

export const LinkText: FC<LinkProps> = ({ to, text, left, right }) => (
	<LinkWrapper>
		<Link to={to}>
			<NormalText text={text} left={left} right={right} />
		</Link>
	</LinkWrapper>
);

export default NormalText;

const LinkWrapper = styled.div`
	a {
		text-decoration: none;
	}
	p {
		color: ${colors.forest};
	}
    margin-left: 5px;
`;

const StyledText = styled.p`
	font-family: ${typography.fontFamily};
	color: ${colors.darkText};
	font-weight: 700;
    margin: 0;
`;
