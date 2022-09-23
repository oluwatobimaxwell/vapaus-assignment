import { FC, useMemo, useState } from "react";
import styled from "styled-components";
import {
	EmailInput,
	PasswordInput,
	PrimaryButton,
} from "../components/FormElements";
import Layout from "../components/Layout";
import NormalText, { LinkText } from "../components/Typography";
import { routes } from "../constants";
import { validateEmail, validatePassword } from "../helpers";
import { Login } from "../types";
import { ApiClient } from "../api";

const LoginPage: FC = () => {
	const [data, setData] = useState<Login>({
		email: "",
		password: "",
	});

	const isValid = useMemo(() => {
		return validateEmail(data.email) && validatePassword(data.password);
	}, [data]);

	const handleLogin = () => {
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
		<Layout title="Sign In">
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
				<ForgotPassword>
					<NormalText text="Forgot password?" right />
				</ForgotPassword>
				<PrimaryButton
					id="submit"
					disabled={!isValid}
					label="Sign In"
					onClick={handleLogin}
				/>
			</FormWrapper>
			<BottomText>
				<NormalText text="Are you a new user?" left />
				<LinkText to={routes.signup} text="Sign Up" />
			</BottomText>
		</Layout>
	);
};

export default LoginPage;

const BottomText = styled.div`
	display: flex;
	margin-top: 15px;
`;

const ForgotPassword = styled.div`
	margin-bottom: 25px;
	margin-top: 15px;
`;

const FormWrapper = styled.div`
	margin-top: 20px;
	& > :first-child {
		margin-bottom: 23px;
	}
`;
