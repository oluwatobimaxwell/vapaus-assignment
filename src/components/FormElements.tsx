import { FC, useState } from "react";
import styled from "styled-components";
import { colors, typography } from "../constants";

type EmailInputProps = {
	id: string;
	placeholder: string;
	onChange: (v: string) => void;
};

export const EmailInput: FC<EmailInputProps> = ({ id, placeholder, onChange }) => {
	return (
		<StyledInput
			id={id}
			type="email"
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export const PasswordInput: FC<EmailInputProps> = ({
	id,
	placeholder,
	onChange,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<PasswordWrapper>
			<StyledInput
				id={id}
				type={showPassword ? "text" : "password"}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
			<ShowHidePassword id={`${id}-show-or-hide`} showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} />
		</PasswordWrapper>
	);
};

type ButtonProps = {
	id: string;
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

export const PrimaryButton: FC<ButtonProps> = ({
	id,
	label,
	disabled,
	onClick,
}) => {
	return (
		<StyledButton id={id} onClick={onClick} disabled={disabled}>
			{label}
		</StyledButton>
	);
};

type ShowPasswordProps = {
	showPassword: boolean;
}

const ShowHidePassword = styled.button<ShowPasswordProps>`
	background-image:
	url(${({ showPassword }) => showPassword ? 
	require("../assets/imgs/heroicons-solid_eye-on.svg").default
	: require("../assets/imgs/heroicons-solid_eye-off.svg").default });
	width: 40px; 
	height: 40px;
	background-color: transparent;
	border: none;
	background-repeat: no-repeat;
	background-position: center;
	position: absolute;
	right: 2px;
	top: 2px;
	cursor: pointer;
`;

const PasswordWrapper = styled.div`
	position: relative;
`;

const StyledButton = styled.button`
	width: 100%;
	height: 40px;
	border-radius: 8px;
	border: none;
	background: ${colors.forest};
	color: #ffffff;
	font-family: ${typography.fontFamily};
	font-weight: 700;
	font-size: 18px;
	&:disabled {
		background: ${colors.cloud};
	}
	cursor: pointer;
	margin: 0;
`;

const StyledInput = styled.input`
	width: calc(100% - 30px);
	height: 40px;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 400;
	border: 1px solid ${colors.cloud};
	color: ${colors.text};
	padding-left: 15px;
	padding-right: 15px;
	font-family: ${typography.fontFamily};
	background: #ffffff;
	&:focus {
		outline: none;
	}
`;
