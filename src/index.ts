import libcurl from "libcurl.js";
import { version } from "../package.json";
import { createAuthClient } from "better-auth/client";

declare global {
	interface Window {
		TAuthTools: typeof TAuthTools;
	}
}

export class TAuthTools {
	libcurl: typeof libcurl;
	version = version;
	authclient: ReturnType<typeof createAuthClient>;

	constructor(wispUrl?: string) {
		libcurl.load_wasm("https://cdn.jsdelivr.net/npm/libcurl.js@latest/libcurl.wasm");
		// @ts-expect-error no types
		libcurl.set_websocket(wispUrl || "wss://wisp.terbiumon.top/");
		this.libcurl = libcurl;
		const AuthClient = createAuthClient({
			basePath: "https://auth.terbiumon.top",
			fetchOptions: {
				credentials: "include",
				customFetchImpl: (url, options) => this.fetch(url, options),
			},
		});
		this.authclient = AuthClient;
		console.log("[TAUTH] Initialized TAuthTools v" + this.version);
	}

	async fetch(url: string | URL | Request, options: any = {}): Promise<Response> {
		const savedCookies = localStorage.getItem("libcurl_cookies") || "";
		const session = new libcurl.HTTPSession({
			enable_cookies: true,
			cookie_jar: savedCookies,
		});
		session.import_cookies();
		try {
			const headers = new Headers(options?.headers);
			if (!headers.has("origin") && !headers.has("referer")) {
				headers.set("origin", window.location.origin);
			}
			const response = await session.fetch(url.toString(), {
				...options,
				headers,
			});
			return response;
		} finally {
			setTimeout(() => {
				const currentCookies = session.export_cookies();
				localStorage.setItem("libcurl_cookies", currentCookies);
				session.close();
				console.log("HTTP Session Destroyed");
			}, 100);
		}
	}

	async login(email: string, password: string): Promise<any> {
		const result = await this.authclient.signIn.email({
			email,
			password,
		});
		return result.data ? result.data.user : result.error;
	}

	async logout(): Promise<void> {
		await this.authclient.signOut();
	}

	async getInfo(): Promise<any> {
		const response = await this.libcurl.fetch("https://auth.terbiumon.top/user/info", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	}

	async getKV(key: string): Promise<any> {
		const response = await this.libcurl.fetch(`https://auth.terbiumon.top/kv/retrieve/${key}`, {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	}

	async setKV(key: string, value: any): Promise<any> {
		const response = await this.libcurl.fetch(`https://auth.terbiumon.top/kv/set/${key}`, {
			credentials: "include",
			method: "POST",
			body: JSON.stringify({
				value: JSON.stringify(value),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	}
}

if (typeof window !== "undefined") {
	window.TAuthTools = TAuthTools;
}
