import { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { ApiClient } from "../api";
import {
	EmailInput,
	PasswordInput,
	PrimaryButton,
} from "../components/FormElements";
import Layout from "../components/Layout";
import NormalText, { LinkText } from "../components/Typography";
import { routes } from "../constants";
import { validateEmail, validatePassword } from "../helpers";
import { Signup } from "../types";

const SignupPage: FC = () => {
	const [data, setData] = useState<Signup>({
		email: "",
		password: "",
		password_repeat: "",
	});

	const isValid = useMemo(() => {
		return (
			validateEmail(data.email) &&
			validatePassword(data.password) &&
			data.password === data.password_repeat
		);
	}, [data]);

	const handleSignup = () => {
		ApiClient.login(data)
			.then((res) => {
				// Handle response
				console.log(res);
			})
			.catch((err) => {
				// Handle error
				console.log(err);
			});
	};

	return (
		<Layout title="Sign Up">
			<TopText>
				<NormalText text="Already registered? " left />
				<LinkText to={routes.login} text="Sign In" />
			</TopText>
			<FormWrapper>
				<EmailInput
					id="email"
					placeholder="Email"
					onChange={(v) => setData({ ...data, email: v })}
				/>
				<PasswordInput
					id="password"
					placeholder="Password"
					onChange={(v) => setData({ ...data, password: v })}
				/>
				<PasswordInput
					id="password_repeat"
					placeholder="Repeat password"
					onChange={(v) => setData({ ...data, password_repeat: v })}
				/>
			</FormWrapper>
			<BottomText>
				<NormalText text="By registering, I accept the terms of" left />
				<LinkText to="#" text="the Confidentiality Agreement" left />
			</BottomText>
			<PrimaryButton
				id="submit"
				disabled={!isValid}
				label="Sign Up"
				onClick={handleSignup}
			/>
		</Layout>
	);
};

export default SignupPage;

const BottomText = styled.div`
	display: flex;
	margin-top: 15px;
	flex-direction: column;
	margin-bottom: 20px;
	margin-left: 0 !important;
	a,
	p {
		margin: 0;
		font-weight: 400;
	}
	a > p {
		font-weight: 700;
		text-decoration: underline;
	}
	div {
		margin-left: 0 !important;
	}
`;

const TopText = styled.div`
	display: flex;
	margin-top: 15px;
`;

const FormWrapper = styled.div`
	margin-top: 20px;
	& > * {
		margin-bottom: 23px;
	}
`;
