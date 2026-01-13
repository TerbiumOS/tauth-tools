interface SignInButtonProps {
	action?: any;
	redirURL?: string;
	variant?: "dark" | "light";
	backgroundColor?: string;
}

export function SignInButton({ action, redirURL, variant = "light", backgroundColor }: SignInButtonProps) {
	return (
		<button
			style={
				variant === "dark"
					? {
							backgroundColor: backgroundColor || "#00000050",
							color: "#ffffffc8",
							fontFamily: "system-ui",
							fontWeight: "600",
							padding: "6px 14px 6px 14px",
							width: "max-content",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "8px",
							borderRadius: "99px",
						}
					: variant === "light"
						? {
								backgroundColor: backgroundColor || "#ffffff40",
								color: "#ffffffc8",
								fontFamily: "system-ui",
								fontWeight: "600",
								padding: "6px 14px 6px 14px",
								width: "max-content",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								borderRadius: "99px",
							}
						: {
								backgroundColor: backgroundColor || "transparent",
								color: "#ffffffc8",
								fontFamily: "system-ui",
								padding: "6px 14px 6px 14px",
								width: "max-content",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								borderRadius: "99px",
							}
			}
			onClick={() => {
				if (action) {
					action();
				} else if (redirURL) {
					window.location.href = redirURL;
				}
			}}
		>
			<svg width="26" height="26" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M57.4819 43.5825C59.3825 43.5825 60.9232 42.0477 60.9232 40.1545V28.2703C60.9232 26.377 59.3825 24.8423 57.4819 24.8423H3.44132C1.54073 24.8423 0 26.377 0 28.2703V40.1545C0 42.0477 1.54073 43.5825 3.44132 43.5825H17.1216C19.0222 43.5825 20.5629 45.1173 20.5629 47.0105V99.572C20.5629 101.465 22.1037 103 24.0043 103H36.9189C38.8195 103 40.3603 101.465 40.3603 99.572V47.0105C40.3603 45.1173 41.901 43.5825 43.8016 43.5825H57.4819ZM124.795 48.7636C125.233 33.8817 114.405 24.9525 99.6384 24.9525H72.0166C70.116 24.9525 68.5753 26.4873 68.5753 28.3805V99.572C68.5753 101.465 70.116 103 72.0166 103H100.185C117.358 103 125.78 95.3937 127.748 82.8267C128.676 77.219 127.565 67.9918 118.564 62.4253C117.849 61.9836 117.841 60.882 118.52 60.3889C122.864 57.2366 124.698 51.9064 124.795 48.7636ZM91.5325 55.4881C89.7269 55.4881 88.2632 54.03 88.2632 52.2315V44.8548C88.2632 43.0563 89.7269 41.5982 91.5325 41.5982H99.6384C109.482 41.5982 109.154 55.4881 99.6384 55.4881H91.5325ZM91.5325 85.6929C89.7269 85.6929 88.2632 84.2348 88.2632 82.4363V72.9651C88.2632 71.1666 89.7269 69.7086 91.5325 69.7086H99.6384C111.232 69.7086 111.451 85.6929 99.6384 85.6929H91.5325Z"
					fill="url(#paint0_linear_1438_10)"
				/>
				<defs>
					<linearGradient id="paint0_linear_1438_10" x1="0" y1="24.8423" x2="127.745" y2="103.442" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FF8686" />
						<stop offset="0.25" stop-color="#D16FFF" />
						<stop offset="0.5" stop-color="#7CA1FF" />
						<stop offset="0.75" stop-color="#D16FFF" />
						<stop offset="1" stop-color="#FF8686" />
					</linearGradient>
				</defs>
			</svg>
			<span style={{ width: "max-content", fontWeight: "600", lineHeight: "1.2" }}>Sign in with TB Cloud&trade;</span>
		</button>
	);
}
