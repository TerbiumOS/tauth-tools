export default function SignInButton(redirURL: string, variant?: "dark" | "light") {
	if (variant === "dark") {
		return (
			<div
				style={{
					fontFamily: "system-ui",
					padding: "8px",
					cursor: "pointer",
					backgroundColor: "#00000050",
					color: "#ffffff",
					width: "235px",
					height: "50px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "8px",
					borderRadius: "16px",
				}}
				onClick={() => {
					window.location.href = redirURL;
				}}
			>
				<img src="https://terbiumon.top/tb.svg" width="24" height="24" />
				Sign in with Terbium Cloud&trade;
			</div>
		);
	} else {
		return (
			<div
				style={{
					fontFamily: "system-ui",
					padding: "8px",
					cursor: "pointer",
					backgroundColor: "#ffffff50",
					color: "#000000",
					width: "235px",
					height: "50px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "8px",
					borderRadius: "16px",
				}}
				onClick={() => {
					window.location.href = redirURL;
				}}
			>
				<img src="https://terbiumon.top/tb.svg" width="24" height="24" />
				Sign in with Terbium Cloud&trade;
			</div>
		);
	}
}
